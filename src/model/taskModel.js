const mongoose=require ('mongoose')

const taskSchema= new mongoose.Schema({
    Title:{
        type:String,
        trim:true
    },
 Description:{
    type:String,
    trim:true
},
Status:{
    type:String,
    trim:true,
    enum:['Open', 'In-Progress', 'Completed']
},
isDeleted:{
    type:Boolean,
    default:false
}
},{ timestamps: true })

module.exports=mongoose.model('Task',taskSchema);
