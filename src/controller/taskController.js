const taskModel=require('../model/taskModel');
const {isValidStatus, isValidString, isValidRequestBody, isValid, isValidObjectId}= require('../validation/validation')

exports. createTask=async (req, res) =>{
    try{
        let data=req.body

        let {Title, Description, Status}=data

        if(!isValidRequestBody(data)) return res.status(404).send({status:false,message:"request body must contain keys"});

        //-----------------------check keys and its validation------------------

        
        if(!isValid(Title)) return res.status(404).send({status:false,message:"Title must present in request body"});
        if(!isValidString(Title)) return res.status(404).send({status:false,message:"Please provide a valid title"});

        if(!isValid(Description)) return res.status(404).send({status:false,message:"Description must present in request body"});
        if(!isValidString(Description)) return res.status(404).send({status:false,message:"Please provide a valid Description"});

        if(!isValid(Status)) return res.status(404).send({status:false,message:"Status must present in request body"});
        if(!isValidStatus(Status)) return res.status(404).send({status:false,message:"Please provide a valid Status"});

        //------------------------create task-----------------------------------

        const createTasks= await taskModel.create(data)

        return res.status(200).send({status:true, message:"successfully created", data:createTasks})

    }catch(error){
        return res.status(500).send({status:true,message: error.message})
    }
}

exports. updateTask= async (req, res) => {
    try{
        let data=req.body
        let {Title, Description, Status, taskId}=data

        if(!isValidRequestBody(data)) return res.status(400).send({status:false,message:"request body must contain keys"});

        if(Title){
            if(!isValid(Title)) return res.status(400).send({status:false,message:"Title must present in request body"});
        if(!isValidString(Title)) return res.status(400).send({status:false,message:"Please provide a valid title"});
        }

        if(Description){
            if(!isValid(Description)) return res.status(400).send({status:false,message:"Description must present in request body"});
        if(!isValidString(Description)) return res.status(400).send({status:false,message:"Please provide a valid Description"});
        }

        if(Status){
            if(!isValid(Status)) return res.status(400).send({status:false,message:"Status must present in request body"});
            if(!isValidStatus(Status)) return res.status(400).send({status:false,message:"Please provide a valid Status"});
        }

        let findTaskId= await taskModel.findOne({_id:taskId})
        if(!findTaskId) return res.status(404).send({status:false,message:"Task not found"});
        
        let updateTask = await taskModel.findOneAndUpdate(
            {_id:taskId},
            {
                Title:req.body.Title, 
                Description:req.body.Description, 
                Status:req.body.Status
            },
            {new:true}
        )

        return res.status(200).send({status:true, message:"sucessfully update", data: updateTask})

    }
    catch(error){
        return res.status(500).send({status:false, message: error.message})
    }
}

exports. deleteTask= async (req, res) => {
    try{
        let data= req.body
        let {taskId}=data

        if(!isValidRequestBody(data)) return res.status(400).send({status:false,message:"request body must contain keys"});

        if(!isValidObjectId(taskId)) return res.status(400).status({status:false, message:"Please provide valid taskId"});

        let findTaskId= await taskModel.findOne({_id:taskId})
        if(!findTaskId) return res.status(404).send({status:false,message:"Task not found"});

        let deleteTask = await taskModel.findOneAndUpdate(
            {_id:taskId},
            {
               isDeleted:true
            },
            {new:true}
        )

        return res.status(200).send({status:true, message:"sucessfully deleted task", data: deleteTask})

    }
    catch(error){
        return res.status(500).send({status:false, message: error.message}) 
    }
}