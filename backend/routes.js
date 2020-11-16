const express = require('express');
const router = express.Router();

const fruitsController = require('./fruitsController.js')
const fruitsRoute = '/fruits';

router.get(fruitsRoute + '/:fruit',
  (req, res, next) => {
    fruitsController.getOneFruit(req, res, next)
  }
)

router.get(fruitsRoute,
  (req, res, next) => {
    fruitsController.getAllFruits(req, res, next)
  }
)

module.exports = router;