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

export const getProduct = (req: Request, res: Response) => {
    res.json({
        msg: 'get product',
        id: req.params.id
    })
}

export const deleteProduct = (req: Request, res: Response) => {
    res.json({
        msg: 'delete product',
        id: req.params.id
    })
}

export const postProduct = (req: Request, res: Response) => {
    const { body } = req
    const { id } = req.params
    res.json({
        msg: 'update product',
        id,
        body
    })
}

export const updateProduct = (req: Request, res: Response) => {
    const { body } = req
    res.json({
        msg: 'post product',
        body
    })
}