const express = require('express');
const morgan = require('morgan');
const path = require('path');

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  // app.use(fileMiddleware);
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use('/avatar', express.static(path.resolve('uploads')));
  app.use(express.static(path.resolve('public')));
};

module.exports = config;
