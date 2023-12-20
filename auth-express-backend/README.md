

PORT='what ever you choose'
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=auth_dev
PG_USER=postgres
PRIVATE_KEY='Use the function below run it using the debugger in a '.js' file by itself then delete it when your done you can leave it in the readme file though'

to generate your private key:

****
const crypto = require('crypto');

const generateKey = (length = 32) => {
  return crypto.randomBytes(length).toString('hex');
}

const privateKey = generateKey();
console.log(privateKey);
****

or you can run like this as well in the terminal:
****
node generateKey.js
****