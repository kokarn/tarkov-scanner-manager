const fs = require('fs');
const path = require('path');

const got = require('got');
const cron = require('node-cron');

const getLatestVersion = async () => {
    const response = await got('http://registry.npmjs.com/-/v1/search?text=tarkov-scanner&size=20', {
        responseType: 'json',
    });

    return response.body.objects[0].package.version;
};

const checkForNewVersion = async () => {
    const versionsFilePath = path.join(__dirname, 'version.txt');
    let currentVersion = false;

    console.log('Checking for new version');

    try {
        currentVersion = fs.readFileSync(versionsFilePath, 'utf-8');
    } catch (readError){
        // Do nothing
    }
    const npmVersion = await getLatestVersion();

    if(currentVersion !== npmVersion){
        fs.writeFileSync(versionsFilePath, npmVersion);
    }
}

cron.schedule('* * * * *', checkForNewVersion);