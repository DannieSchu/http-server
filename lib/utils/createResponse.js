module.exports = ({ body = '', status, contentType }) => {
  return `
HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}
  `.trim();
};
