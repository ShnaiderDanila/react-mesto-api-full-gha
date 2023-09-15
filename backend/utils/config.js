const DEFAULT_ERROR = 500;
const CONFLICT_ERROR = 409;
const BAD_REQUEST_ERROR = 400;

const CREATED_STATUS = 201;

const regex = /^https?:\/\/(w{3}\.)?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]+\.[a-z0-9]+\/?[-a-z0-9._~:?#[\]@!$&'()*+,;=/]*#?$/i;

const allowedCors = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://mesto.shnd3r.nomoredomainsicu.ru',
  'http://mesto.shnd3r.nomoredomainsicu.ru',
  'https://api.mesto.shnd3r.nomoredomainsicu.ru',
];

const DEFAULT_ALLOWED_METHODS = 'GET, HEAD, PUT, PATCH, POST, DELETE';

module.exports = {
  DEFAULT_ERROR,
  CONFLICT_ERROR,
  BAD_REQUEST_ERROR,
  CREATED_STATUS,
  regex,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
