import { Router } from 'express'
import { getProducts, getProduct, deleteProduct, postProduct, updateProduct } from '../controllers/product'

const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.delete('/:id', deleteProduct)
router.post('/', postProduct)
router.post('/:id', updateProduct)

export default router