const { spawn } = require('child_process');
const ls = spawn('npx', ['-y', 'tarkov-scanner']);

ls.stdout.on('data', (data) => {
    console.log(data.toString());
});

ls.stderr.on('data', (data) => {
    console.error(data.toString());
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});