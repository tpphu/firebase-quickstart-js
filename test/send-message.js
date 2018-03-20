var fetch = require('node-fetch');
require('dotenv').config()


var key = process.env.FIREBASE_MESSAGE_SERVER_KEY;
var to = 'eNmrcu9Z-LY:APA91bHcnmXTw8eTjaFNppPYjeJ41FB_h9bLTmZReU9haXGMthicAV6rqQc_A7Nn4yhAncsgTKHIPpnQupb99lFSEK-A6RRVzNc4PcdTELH8OWv13qM5Zi_M6-cotwf_zShx5ZWilh4y';
// var to = 'esdWbyWGLso:APA91bE3pw0iyjjJ7rSkX9lhMu-6wG6Xk7xXPeOjQkeKbQ5EQUhaHBq2LKNe07mCmbyzoO6pzdRrx0nlzwhxwwbq54o7llX-G7GzmMe4PhiMccj9mHQbGWQeKUjEl3oSknHPh4_xdXAq';

// https://github.com/firebase/quickstart-js/issues/71#issuecomment-258872970
// https://developers.google.com/web/fundamentals/push-notifications/display-a-notification

var notification = {
  'title': 'VN vs. Thailand',
  'body': '5 to 1',
  'icon': 'firebase-logo.png',
  'image':  'https://developer.chrome.com/static/images/image_notification.png',
  'click_action': 'http://localhost:8081'
};

fetch('https://fcm.googleapis.com/fcm/send', {
  'method': 'POST',
  'headers': {
    'Authorization': 'key=' + key,
    'Content-Type': 'application/json'
  },
  'body': JSON.stringify({
    // 'notification': notification,
    'data': notification,
    'to': to
  })
}).then(function(response) {
  console.log(response);
}).catch(function(error) {
  console.error(error);
})