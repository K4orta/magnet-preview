const { post } = require('axios')

async function add(req, res) {
  const addMagent = await post(`https://api.put.io/v2/transfers/add?oauth_token=${process.env.ACCESS_CODE}`, {
    url: 'http://www.frostclick.com/torrents/video/animation/Big_Buck_Bunny_1080p_surround_frostclick.com_frostwire.com.torrent',
    callback_url: `${process.env.APP_HOST}/done`
  })

  res.json(addMagent.data)
}

function callback(req, res) {
  console.log(req.body)
  res.json({})
}

module.exports = {
  add,
  callback
}