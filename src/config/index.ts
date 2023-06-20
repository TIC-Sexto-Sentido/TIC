import * as dotenv from 'dotenv';

let envFile = '.env'; // Default to .env file

dotenv.config({ path: envFile });

const config = {
    port: parseInt(String(process.env.PORT), 10) || 3001
};

export { config };