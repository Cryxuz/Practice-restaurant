import connection from './connection'

const db = connection

export async function getBookings() {
  return db('bookings').select()
}

export async function addBooking(booking) {
  console.log('db console')
  return db('bookings').insert({...booking}).returning(['id', 'name', 'time', 'date', 'seats'])
}
