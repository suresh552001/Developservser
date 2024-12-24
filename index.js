const express=require("express")
require('dotenv').config()
const app=express()
 const PORT=process.env.PORT;
const projectRoutes=require("./Routes/projectRouter")
app.use("/projectDashboard",projectRoutes)
  
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
  