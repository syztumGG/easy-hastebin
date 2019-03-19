const fetch = require('node-fetch');

module.exports = async (input, ext) => {
  const res = await fetch('https://hasteb.in/documents', { method: 'POST', body: input }).then(res => res.json());
  return `https://hasteb.in/${res.key}${ext ? `.${ext}` : ''}`;
};
// i prefer hasteb.in to hastebin which is honestly the only reason this exists
