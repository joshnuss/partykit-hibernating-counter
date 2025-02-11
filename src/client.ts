import "./styles.css"
import PartySocket from "partysocket"

declare const PARTYKIT_HOST: string

// connect to counter server
const conn = new PartySocket({
  host: PARTYKIT_HOST,
  room: "my-new-room",
})

// get DOM elements
const value = document.querySelector('#value')
const increment = document.querySelector('#increment')
const decrement = document.querySelector('#decrement')

// handle increment button click
increment.addEventListener('click', () => {
  // send `increment` message
  conn.send('increment')
})

// handle decrement button click
decrement.addEventListener('click', () => {
  // send `decrement` message
  conn.send('decrement')
})

// handle new value from server
conn.addEventListener("message", (event) => {
  // remove highlighting
  value.classList.remove('highlight')

  // update DOM
  value.innerText = event.data

  // add highlighting
  setTimeout(() => {
    value.classList.add('highlight')
  }, 10)
})
