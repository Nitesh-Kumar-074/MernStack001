import {createData,readData,updateData,deleteData} from '../controllers/text.controller.js'

import { Router } from 'express'

const router = Router()

router.route("/create").post(createData)
router.route("/delete/:id").delete(deleteData)
router.route("/update/:id").patch(updateData)
router.route("/read-all").get(readData)

export default router