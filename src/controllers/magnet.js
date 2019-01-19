const { post } = require('axios')

async function add(res, resp) {
  const addMagent = await post(`https://api.put.io/v2/transfers/add?oauth_token=${process.env.ACCESS_CODE}`, {
    url: 'http://vodo.net/media/torrents/Sintel.2010.720p.SURROUND.x264-VODO.torrent',
    callback_url: `${process.env.APP_HOST}/done`
  })

  resp.json(addMagent.data)
}

function callback(res, resp) {
  console.log(res.body)
  res.json({})
}

module.exports = {
  add,
  callback
}