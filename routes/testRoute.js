const express=require('express')
const {testFunction, textFunction}=require('../controllers/textController')
const router=express.Router()


router.get('/text',textFunction)

module.exports=router