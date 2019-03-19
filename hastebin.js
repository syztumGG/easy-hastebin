const fetch = require('node-fetch');

module.exports = (input, ext) => {
  return new Promise((res, rej) => {
    if (!input) rej(new Error('You need to input something.'));
    fetch('https://hasteb.in/documents', { method: 'POST', body: input })
      .then(body => body.json().then(json => res(`https://hasteb.in/${json.key}${(ext) ? `.${ext}` : ''}`)))
      .catch(err => rej(err));
  });
};
// i prefer hasteb.in to hastebin which is honestly the only reason this exists
