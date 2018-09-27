
var twilio = require('twilio');

exports.twilio1=function(mobile_no){
    var accountSid = 'AC62386224491b445a658c3439445084a4'; // Your Account SID from www.twilio.com/console
    var authToken = '83ea7e0b723587a2f036e6b39c244259';   // Your Auth Token from www.twilio.com/console


    var client = new twilio(accountSid, authToken);
    var num=Math.floor((Math.random() * 4000) + 1)
    var nnum=('0'+num).slice(-4)

    client.messages.create({
        body: 'your verification code for the COMMITTEE App is : '+nnum,
        to: mobile_no,  // Text this number
        from: '+18103394287' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
    return nnum;
}