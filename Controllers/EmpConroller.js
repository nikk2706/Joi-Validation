const bcryp = require('bcrypt');
const hashPasswordmiddleware = require('../middleware/Hashpassword');
const {CreateEmp, FindallEmployees, FindEmployee, DeleteEmployee, UpdateEmployee} = require ('../services/Emp_Services');

exports.AddEmp = async(req, res)=>{
    const hashedpassword = req.body.PasswordHash;
    try{
        const emp = await CreateEmp(req.body);
        
        res.status(200).send("Employee Added Successfully..." + emp);
    }catch(e){
        res.status(400).send("Error" + e);
    }
}

exports.Alldata = async(req, res)=>{
    try{
        const data = await FindallEmployees();
        res.status(200).send(data);
    }catch(e){
        res.status(400).send("Error" + e);
    }
}

exports.Empdata = async(req,res)=>{
    try{
        const data = await FindEmployee(req.params.id);
        res.status(200).send(data);
    }catch(e){
        res.status(400).send("Error" + e);
    }
}

exports.DeleteEmp = async(req, res)=>{
    try{
        const data = await DeleteEmployee(req.params.id);
        res.status(200).send(data + "Employee Deleted.....");
    }catch(e){
        res.status(400).send("Error" + e);
    }
}

exports.UpdateEmp = async(req, res)=>{
    try{
        const data = await UpdateEmployee(req.params.id, req.body,{ new : true });
        res.status(200).send("Employee Updated successfully" + data)
    }catch(e){
        res.status(400).send("Error" + e);
    }
}
// module.exports = {AddEmp, Alldata, Empdata, DeleteEmp, UpdateEmp }