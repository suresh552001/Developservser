const express=require("express")
const router=express.Router();

const{
    CreateProject,
    getAlltask,
    getProject,
    updateTask,
    deleteProject,
}=require("../Controller/projectController")
  
router.post("/project",CreateProject);
router.get("/allTask",getAlltask);
router.get("/project/:id",getProject);
router.patch("/updateTask/:id",updateTask);
router.delete("/project/:id",deleteProject);

module.exports=router;