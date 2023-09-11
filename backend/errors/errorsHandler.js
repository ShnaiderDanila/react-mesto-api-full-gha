const mongoose = require('mongoose');

const { DEFAULT_ERROR, CONFLICT_ERROR, BAD_REQUEST_ERROR } = require('../utils/config');

const handleErrors = (err, req, res, next) => {
  // Оповещение разработчика о возникшей ошибке
  console.error(err);
  // Если у ошибки нет статуса, выставляем 500
  const { statusCode = DEFAULT_ERROR, message } = err;
  if (err instanceof mongoose.Error.CastError || err instanceof mongoose.Error.ValidationError) {
    return res.status(BAD_REQUEST_ERROR).send({ message: 'Переданы некорректные данные.' });
  }
  if (err.code === 11000) {
    return res.status(CONFLICT_ERROR).send({ message: 'Пользователь с таким email уже зарегистрирован.' });
  }
  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === DEFAULT_ERROR ? 'На сервере произошла ошибка' : message,
    });
  return next();
};

module.exports = handleErrors;
