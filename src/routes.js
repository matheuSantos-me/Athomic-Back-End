import { Router } from 'express'

import signupController from './controllers/signup'
import productsController  from './controllers/products'
import signinController from './controllers/signin'

const routes = Router()

routes.post('/signin', signinController.create)

routes.post('/signup', signupController.create)

routes.get('/products', productsController.index)

routes.post('/products', productsController.create)

routes.put('/products', productsController.update)

routes.delete('/products/:id', productsController.delete )

// routes.get('/orderOfService', (req, res) => {
// })

// routes.post('/orderOfService', (req, res) => {
//   const { ownerName, cnpjOrCpf, nickName, cep, address, number, city, neighborhood, state, brand, model, year, km, board, parts, valueOfLabor, description, totalValue } = req.body

//   const body = {
//     ownerName,
//     cnpjOrCpf,
//     nickName,
//     cep,
//     address,
//     number,
//     city,
//     neighborhood,
//     state,
//     brand,
//     model,
//     year,
//     km,
//     board,
//     parts,
//     valueOfLabor,
//     description,
//     totalValue
//   }

//   console.log(body, "BODY")

//   return res.json(body)
// })

// routes.put('/orderOfService', (req, res) => {
//   const { id, ownerName, cnpjOrCpf, nickName, cep, address, number, city, neighborhood, state, brand, model, year, km, board, parts, valueOfLabor, description, totalValue } = req.body
// })

// routes.delete('/orderOfService/:id', (req, res) => {
// })

export default routes