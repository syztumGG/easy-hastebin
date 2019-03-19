const rp = require('request-promise');

module.exports = (input, ext) => {
  const ops = {
    method: 'POST',
    uri: 'https://hasteb.in/documents',
    body: input,
    json: true,
  };
  return new Promise((res, rej) => {
    if (!input) rej(new Error('You need to input something'));
    rp(ops).then(body => res(`https://hasteb.in/${body.key + (ext ? `.${ext}` : '')}`)).catch(err => rej(err));
  });
};
// i prefer hasteb.in to hastebin which is honestly the only reason this exists
