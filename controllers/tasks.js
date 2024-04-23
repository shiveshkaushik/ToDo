const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../errors/custom-error');

const getalltask = asyncWrapper(async (req, res) => {
      const tasks = await Task.find({});
      return res.status(200).json({ tasks });
  });
  

const createtask =asyncWrapper( async (req,res)=>{
            const task = await Task.create(req.body);
            res.status(201).json({task});
    })


const gettask = asyncWrapper(async(req,res,next)=>{
    const {id:taskID} = req.params;
    const task = await Task.findOne({_id:taskID});
    if(!task)
    {
        return next(createCustomError('No task found with the given id'),404)
    }
    res.status(200).json({task});

})

const updatetask = asyncWrapper(async(req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
        new:true,
        runValidators:true,
    });
    if(!task)
    {
        return res.status(500).send('No task with such id');
    }

    res.status(200).json({task});
})

const deletetask = asyncWrapper(async(req,res)=>{
    const {id:taskID} = req.params;
    const task = await Task.findOneAndDelete({_id:taskID});
    if(!task)
    {
        return res.status(500).send('No task with such id');
    }
    res.status(200).json({task});
})

module.exports = {
    getalltask,gettask,createtask,updatetask,deletetask
}
