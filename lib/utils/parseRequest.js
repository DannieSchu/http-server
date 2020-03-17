// const request = `POST / HTTP/1.1
// Host: developer.mozilla.org
// Accept-Language: fr\r
// \r
// {"name":"spot"}`;

module.exports = rawRequest => {
  const pattern = /(?<method>\w+)\s(?<path>\/\w*)/; 
  const { method, path } = rawRequest.match(pattern).groups;

  const [, body] = rawRequest.split('\r\n\r\n');

  return { 
    method, 
    path, 
    body 
  };
};

// module.exports = { parseRequest };
// (?<method>\w+)\s(?<path>\/)\s(?:HTTP/\d\.\d)

// \s(?:http\/\d\.\d)\s(?:Host:\s\w+\.\w+\.\w+)\s(?:Accept-Language: \w+)(?<body>\w+)
