import express, { Request, Response } from 'express'
import Producto from '../models/product'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const listProducts = await Producto.findAll()
        res.json(listProducts)
        
    } catch (e) {
        console.log('error', e)
    }

    
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)
    if(product) {
        res.json(product)
    } else {
        res.status(404).json({
            msg: `No existe un producto con id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Producto.findByPk(id)

    if(product) {
        await product.destroy()
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un producto con id ${id}`
        })
    }
}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req

    try {
        await Producto.create(body)
        res.json({
            msg: `El producto fue agregado con exito`
        })
    } catch (e) {
        res.json({
            msg: `Hubo un error`
        })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { body } = req
    const {  id } = req.params

    const product = await Producto.findByPk(id)

    try{
        if (product) {
            await product.update(body)
            res.json({
                msg: 'El producto fue actualizado con exito'
            })
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            msg: 'Error de update'
        })
    }

    
}