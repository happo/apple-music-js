// .happo.js
const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
    iosSafari: new RemoteBrowserTarget('ios-safari', {
      viewport: '375x640',
    }),
  },
};
