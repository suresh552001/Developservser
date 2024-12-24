const CreateProject=(req,res)=>{
    res.send("List of All Projects");
}
const  getAlltask=(req,res)=>{
    res.send("project Title,assigned,starton,endon,taskstatus,report");
}
const getProject=(req,res)=>{
    res.send("List out ProjectDetails ");
}
const updateTask =(req,res)=>{
    res.send("project Title,assigned,startDate,endDate,taskstatus,report");
}

const deleteProject=(req,res)=>{
    res.send("deleteProject");
}

module.exports={CreateProject,
    getAlltask,
    getProject,
    updateTask,
    deleteProject}