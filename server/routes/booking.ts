import express from 'express'

import {addBooking, getBookings} from '../db/db'

const router = express.Router()

router.get('/', async (req,res) => {
  getBookings()
  .then((bookings) => {
    res.json(bookings)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

router.post('/', async (req,res) => {
  const booking = req.body
  const addedBooking = await addBooking(booking)
  console.log('routes console')
  res.json(addedBooking)
})

export default router