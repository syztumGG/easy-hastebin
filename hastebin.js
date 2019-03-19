const rp = require('request-promise');

module.exports = (input, ext) => {
  if (!input) throw new Error('You need to input something.');

  const ops = {
    method: 'POST',
    uri: 'https://hasteb.in/documents',
    body: { some: input },
    json: true,
  };
  rp(ops).then(res => `https://hasteb.in/${res.key + (ext ? `.${ext}` : '')}`);
};
// i prefer hasteb.in to hastebin which is honestly the only reason this exists
