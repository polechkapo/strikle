const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')

const config = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../frontend/build')));
  app.use('/avatar', express.static(path.resolve('uploads')));
  app.use(express.static(path.resolve('public')));
  app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    credentials: true,
  }));
};

module.exports = config;
