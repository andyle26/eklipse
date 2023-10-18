import * as dotenv from 'dotenv';
import * as fs from 'fs';

async function globalSetup() {
    await new Promise((resolve) => {
        //Set environment
        dotenv.config({path: 'env/.env'});

        //Clear report history
        fs.rmSync('./allure-results', { recursive: true, force: true });
        fs.mkdir('./allure-results', resolve);
    })
}
export default globalSetup;