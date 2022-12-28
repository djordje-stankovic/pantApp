var express = require('express')
var router = express.Router();
let dbConectio = require('./connection')
const sql = require('mssql/msnodesqlv8')

router.get("/data/:id",async (req,res) => {  
    try {
        await sql.connect(dbConectio);      
        const result = await sql.query`select top 1  * from the_Move where acKey = ${req.params.id} `
       let record = result.recordsets[0]
       
       res.send(record);      
    } catch(err)
    {   
        console.log(err)
        res.send('eroor');
    }
   
});
router.get("/data",async (req,res) => {  
  try {
      await sql.connect(dbConectio);      
      const result = await sql.query`select top 10  * from the_Move `
     let record = result.recordsets[0]
     
   
     res.send(record);
    
  } catch(err)
  {   
      console.log(err)
      res.send('eroor');
  }
  
 
});
router.post("/dokument",async (req,res) => { 
    let params = req.body.docType; 
    console.log(req.body)
    try {
        await sql.connect(dbConectio);      
        const result = await sql.query`select top 10  * from the_Move where acDocType = ${params}`
       let record = result.recordsets[0]
       console.log(record)
       res.send(record);
      
    } catch(err)
    {   
        console.log(err)
        res.send('eroor');
    }

});

module.exports = router