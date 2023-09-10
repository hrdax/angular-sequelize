import { Router } from 'express'
import { getProducts, getProduct, deleteProduct, postProduct } from '../controllers/product'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.get('/:id', deleteProduct)
router.get('/', postProduct)

export default router