var express = require('express')
var router = express.Router();
let dbConectio = require('./connection')
const sql = require('mssql/msnodesqlv8')
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";

router.get("/user",async (req,res) => {  
    try {
        await sql.connect(dbConectio);      
        const result = await sql.query`select top 1  * from the_Move where acKey = ${req.params.id} `
       let record = result.recordsets[0]
        
    } catch(err)
    {   
        console.log(err)
        res.send('eroor');
    }
   
});
router.post("/user",async (req,res) => { 
  
    let user = req.body.user;
    //console.log(req.headers.authorization) 
  try {
      await sql.connect(dbConectio);      
      const result = await sql.query`select * from tPA_UserArh where acUserId = ${user} `
     let record = result.recordsets[0][0]
    
     if(record) {
        return res.json({
            token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
          });
       }
       return res.json({ message: "The username and password your provided are invalid" });  
    
  } 
  catch(err)
  {   
      console.log(err)
      res.send('eroor');
  }
 
});



module.exports = router