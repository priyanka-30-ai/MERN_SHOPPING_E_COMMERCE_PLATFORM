import express from 'express'
import { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin routes
orderRouter.post('/list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// User routes
orderRouter.post('/place', authUser, placeOrder)           // COD
orderRouter.post('/stripe', authUser, placeOrderStripe)    // Stripe

orderRouter.post('/userorders', authUser, userOrders)
orderRouter.post('/verifystripe', authUser, verifyStripe)

export default orderRouter
