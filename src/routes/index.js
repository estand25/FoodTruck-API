import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initiailizeDB from '../db';
import foodtruck from '../controller/foodtruck';
import account from '../controller/account';

let router = express();

// connect to db
initiailizeDB(db =>{

  // internal middleware
  router.use(middleware({config, db}));

  // api routes v1 (/v1)
  router.use('/foodtruck',foodtruck({config, db}));
  router.use('/account', account({config, db}));
});

export default router;
