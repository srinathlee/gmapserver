import {Router} from 'express'
import * as controlls from '../appcontroles/index.js'
const router=Router()

router.route('/').get(controlls.GetPost)
router.route('/post').post(controlls.PostPot)

export default router