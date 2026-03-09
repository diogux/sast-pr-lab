// server.js
const { execFile } = require('child_process');

function pingServer(userIP) {
  const args = ['-c', '4', userIP];

  execFile('ping', args, (error, stdout, stderr) => {
    if (error) {
      console.error(stderr);
      return;
    }
    console.log(stdout);
  });
}
