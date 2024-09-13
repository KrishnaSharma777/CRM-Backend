import mongoose from 'mongoose';

const UserDetailsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
       
    },
    middleName: {
        type: String
        
    },
    lastName: {
        type: String,
        required: true
    },
    gender:{
        type:String,
        required:true,
        enum:["M","F"]
    },
    dateOfBirth: {
        type: String,
        required: true
       
    },
    panNo: {
        type: String,
        require:true,
        unique:true
        
    },
    mobileNo: {
        type: Number,
        required: true
    },
    ulternateMobileNo:{
        type:Number,
        
    },
   personalEmail: {
        type: String,
        required: true
    },
    OfficeEmail:{
        type:String ,
        
    },
    loanAmount: {
        type: Number,
        required: true
    },
    NoOfLoans:{
        type:Number,
        required:true
    },
    Salary: {
        type: Number,
        required: true
    },
    typeOfLoan:{
        type:String,
        required:true
    },
    pinCode:{
    type:Number,
    required:true,
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }

});

const UserDetails = mongoose.model('UserForm', UserDetailsSchema);
export default UserDetails;
