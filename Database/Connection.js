const mongoose = require ('mongoose');
const url = 'mongodb://127.0.0.1:27017/EmployeeDB';
const option =  {
    useNewUrlParser: true,
    useUnifiedTopology:true,
};


const connection = async()=>{
    try{
        mongoose.connect(url, option);
        console.log("Connection Successful....");
    }catch(e){
        console.log("Error in connection" + e.message);
    }
}
connection();   