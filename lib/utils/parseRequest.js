// const request = `POST / HTTP/1.1
// Host: developer.mozilla.org
// Accept-Language: fr\r
// \r
// {"name":"spot"}`;

module.exports = rawRequest => {
  // const pattern = /(?<method>\w+)\s(?<path>\/\w*)/; 
  // const { method, path } = rawRequest.match(pattern).groups;
  const [method, path] = rawRequest.split('\n')[0].split(' ');
  const [, body] = rawRequest.split('\r\n\r\n');

  return { 
    method, 
    path, 
    body 
  };
};
