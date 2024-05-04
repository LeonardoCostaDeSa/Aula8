import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const router = Router()

router.get('/', UserController, index)
//router.post
//localhost:3000/api/user/

export default router