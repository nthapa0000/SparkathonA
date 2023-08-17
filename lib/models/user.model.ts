import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id:{type:String, required:true},
    username:{type:String, required:true,unique:true},
    name:{type:String, required:true},
    image:String,
    bio:String,
    // we will change this in future according to our needs
    // one user can have multiple references to the thread 
    threads:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Thread'
    }],
    onboarded:{
        type:Boolean,
        default:false,
    },
    communities:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Community'
        }
    ]
});

const User = mongoose.models.User || mongoose.model('User',userSchema);

export default User;