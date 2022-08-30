const express = require('express');
const router = express.Router();

const Employee = require("../Models/EmployeRegister");


router.post("/save", (req,res) =>{

    let newEmployee = new Employee(req.body);

    newEmployee.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employer saved successfully"
        });
    });
}); 

router.get('/getemployee', (req,res) =>{
    Employee.find().exec((err,Employee)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Employee
        });
    });
});

// router.get("/getemployer/:id",(req,res) =>{
//     let postId = req.params.id;

//     Employee.findById(postId,(err,post)=>{
//         if(err){
//             return res.status(400).json({success:false, err});
//         }
//         return res.status(200).json({
//             success:true,
//             post
//         });
//     });
// });

// router.put('/updateemployee/:id',(req,res)=>{
//     Employee.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"Update Successfully"
//             });
//         }
//     );
// });

router.get("/get/:id", (req,res) =>{

    let postId = req.params.id;

    Employee.findById(postId,(err,post) =>{

        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            existingEmployee:post
        });
    });
});

router.put('/update/:id',(req,res)=>{
    Employee.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update successfully"
            });
        }
    );
});

router.route("/deleteemployee/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;