const allowedCors = [
  'https://mestoherokufrontend-5t2i.vercel.app',
  'http://mestoherokufrontend-5t2i.vercel.app',
  // 'https://mestoherokufrontend.herokuapp.com',
  // 'http://mestoherokufrontend.herokuapp.comgit',
  'localhost:3000',
  'http://localhost:3000',
];

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.status(200).end();
  }

  next();
};
