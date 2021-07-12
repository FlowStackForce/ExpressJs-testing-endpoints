const express = require('express');

const familyController = require ('../controllers/family.controller');

const familyRouter = express.Router();

familyRouter.use((req, res, next) => {
console.log('ip address:', req.ip);
next();
});
familyRouter.post('/', familyController.postFamily); 
familyRouter.get('/', familyController.getFamily); 
familyRouter.get('/:familyid', familyController.getFam); 

module.exports = familyRouter; 