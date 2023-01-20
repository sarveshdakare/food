const express=require('express')
const router=express.Router()

router.post('/foodData',(req,res)=>{
    try {
        res.send([global.food_items,global.food_category])
    } catch (error) {
        console.log(error.messsage)
        res.send("sever error")
    }
})

module.exports=router;