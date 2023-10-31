const Employee = require('../Models/EmpModel');

const CreateEmp = async (data) => {
    return await Employee.create(data);
}
/*const CreateEmp = async (data) => {
    const Emp = new Employee(data)
    await Emp.save();
}*/
const FindallEmployees = async () => {
    return await Employee.find();
}
const FindEmployee = async (id) => {
    return await Employee.findById(id);
}
const DeleteEmployee = async (id) => {
    return await Employee.findByIdAndDelete(id);
}
const UpdateEmployee = async (id, data) => {
    return await Employee.findByIdAndUpdate(id, data);
}
module.exports = { CreateEmp, FindallEmployees, FindEmployee, DeleteEmployee, UpdateEmployee }
