const Joi=require("joi");
module.exports.postSchema=Joi.object({
    post:Joi.object({
        title:Joi.string().required(),
        body:Joi.string().required(),
        category:Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(),
        coverImage:Joi.string().allow("",null),
    }).required()
})
module.exports.reviewSchema=Joi.object({
    review:Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),
    }).required()
})

