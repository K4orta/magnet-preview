const { get } = require('axios')

function getFile(fileId) {
  return get(`https://api.put.io/v2/files/${fileId}?oauth_token=${process.env.ACCESS_CODE}`)
}

module.exports = getFile