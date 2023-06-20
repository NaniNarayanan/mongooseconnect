const mongoose = require('mongoose');
const Student = require('./module/StudentModule')

mongoose.connect("mongodb://127.0.0.1:27017/Student",{})
    .then(()=>console.log('Connected'))
    .catch(()=>
    console.log("error"));

    async function run(){
        
    const student = await Student.create({
        name:'John',
        age:31,
        skils:['java', 'js'],
        address:{
            city:'chennai'
        }
    });
    
        // await student.save();
        console.log(student);

        try{
            await student.save();
        }catch(err){
            console.log(err)
        }
    }
    run();