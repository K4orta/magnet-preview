const { get } = require('axios')

function listFolder(folderId) {
  return get(`https://api.put.io/v2/files/list?parent_id=${folderId}&oauth_token=${process.env.ACCESS_CODE}`)
}

module.exports = listFolder