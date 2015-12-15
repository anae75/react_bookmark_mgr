# creates package.json
npm init

# adds dependencies to package.json
npm install --save babel-preset-react babel-preset-es2015 express react react-dom webpack babel babel-loader babel-core react-addons-test-utils css-loader style-loader

# to reinstall node modules on a new machine
npm install

# create index.js
  var express = require('express');
  var app = express();
  app.use(express.static('public'));
  app.listen(3000);

# create public/
# create public/index.html

# edit public/index.html to source script bundle.js
# add public/script.js
# add webpack.config.js

# add a react component in public/app.js
