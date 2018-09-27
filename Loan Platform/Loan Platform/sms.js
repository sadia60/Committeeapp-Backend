
function sendsms()
{

const accountSid = 'AC0246edb239cbbbd95ce28dabf1386cc7';
const authToken = '1d4b496c83cbb41ef99b291e3a93b018';
const client = require('twilio')(accountSid, authToken);

    


console.log('sms service Sms.js file');
var val = Math.floor(1000 + Math.random() * 9000);
console.log(val);
client.messages
  .create({
     body: 'Verification Code is :'+val,
     
     from: '+18444507798',
    to: '+923415332758'
   })
  .then(message => console.log(message.sid));


}
module.exports.sendsms=sendsms;
