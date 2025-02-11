import "./styles.css"

import PartySocket from "partysocket"

declare const PARTYKIT_HOST: string

const conn = new PartySocket({
  host: PARTYKIT_HOST,
  room: "my-new-room",
})

const value = document.querySelector('#value')
const inc = document.querySelector('#inc')
const dec = document.querySelector('#dec')

inc.addEventListener('click', () => {
  conn.send('inc')
})

dec.addEventListener('click', () => {
  conn.send('dec')
})

conn.addEventListener("message", (event) => {
  value.innerText = event.data
})
