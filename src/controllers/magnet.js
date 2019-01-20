const { post } = require('axios')
const getFile = require('../utils/get-file')
const listFolder = require('../utils/list-folder')
const download = require('../utils/download')

async function add(req, res) {
  const addMagent = await post(`https://api.put.io/v2/transfers/add?oauth_token=${process.env.ACCESS_CODE}`, {
    url: 'http://www.frostclick.com/torrents/video/animation/Big_Buck_Bunny_1080p_surround_frostclick.com_frostwire.com.torrent',
    callback_url: `${process.env.APP_HOST}/done`
  })

  res.json(addMagent.data)
}

async function callback(req, res) {
  const out = await getFile(req.body.file_id)
  const { file_type, id } = out.data.file
  if (file_type === 'FOLDER') {
    const folder = await listFolder(id)
    const videos = folder.data.files
      .filter(file => file.file_type === 'VIDEO')
      .sort((a, b) => a.size - b.size)
    if (videos.length > 0) {
      download(videos[0].id, videos[0].name)
        .then(console.log('Download finished'))
      res.json(videos[0])
      return
    }
  }
  res.json(out.data)
}

module.exports = {
  add,
  callback
}