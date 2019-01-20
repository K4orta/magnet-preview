const { spawn } = require('child_process')

function download(fileId, filename) {
  return new Promise(resolve => {
    const proc = spawn('wget', [
      `https://api.put.io/v2/files/${fileId}/download?oauth_token=${process.env.ACCESS_CODE}`,
      '-O',
      filename
    ])

    proc.on('close', resolve)
  })
}

module.exports = download
