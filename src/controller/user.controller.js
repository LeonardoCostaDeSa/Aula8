import user from '../models/user.model.js'

export default class UserController{
    static async index(req,res){
        const users = await user.findMany()
        res.json(users)
    }
}