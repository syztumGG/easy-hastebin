const fetch = require('node-fetch');

module.exports = async (body, ext) => {
  const { key } = await fetch('https://hasteb.in/documents', { method: 'POST', body }).then(res => res.json());
  return `https://hasteb.in/${key}${ext === null ? '' : `.${ext || 'js'}`}`;
};
