const Joi = require("joi");
const {formDataCollection} = require('../connection')

const saveFormData = async(req, res) =>{
    const schema = Joi.object({
        name: Joi.string().regex(/[A-Za-z_]/).max(120).required(),
        email: Joi.string().regex(/\S+@\S+\.\S+/).max(240).required(),
        phone: Joi.string().regex(/^\+\d{1,}$/).max(12).required()
      });
try{
    let params = await schema.validateAsync(req.body);
   let result = await formDataCollection.insertOne(params)
  
    return res.status(200).json({status:200, message: 'success'})

}catch(err){
    console.log(err)
    return res.status(500).json({status: 500, message: 'something went wrong'})
}

}

module.exports = {
    saveFormData
}