const JWT_SECRET = 'a1c49c67fb2f7195808cf575e9ba368280801928e48c1dc71186a5df3ed89a9f';

const DEFAULT_ERROR = 500;
const CONFLICT_ERROR = 409;
const BAD_REQUEST_ERROR = 400;

const CREATED_STATUS = 201;

const regex = /^https?:\/\/(w{3}\.)?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]+\.[a-z0-9]+\/?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]*#?$/i;

const allowedCors = [
  'http://localhost:3000',
  'https://mesto.shnd3r.nomoredomainsicu.ru',
  'http://mesto.shnd3r.nomoredomainsicu.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE';

module.exports = {
  JWT_SECRET,
  DEFAULT_ERROR,
  CONFLICT_ERROR,
  BAD_REQUEST_ERROR,
  CREATED_STATUS,
  regex,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
