import express, { Request, Response } from 'express'

export const getProducts = (req: Request, res: Response) => {
    res.json({
        msg: 'get products'
    })
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
    res.json({
        msg: 'delete product',
        body
    })
}
