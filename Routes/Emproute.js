const express = require('express');
const route = express.Router();
const { validation } = require('express-validation');
const Emp = require('../Models/EmpModel');  
const {validatedata , AddEmp} = require('../Validation/Empjoi');
// const {AddEmp, Alldata, Empdata, DeleteEmp, UpdateEmp } = require('../Validation/Empjoi');
const Operations= require('../Controllers/EmpConroller');
const hashPasswordmiddleware = require('../middleware/Hashpassword');




route.post('/Employee/',validatedata(AddEmp),hashPasswordmiddleware,Operations.AddEmp);
route.get('/Employee/',Operations.Alldata);
route.get('/Employee/:id/',Operations.Empdata);
route.delete('/Employee/:id/',Operations.DeleteEmp);
route.put('/Employee/:id',Operations.UpdateEmp);


module.exports = route;
