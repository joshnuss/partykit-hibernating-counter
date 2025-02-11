import type { Server, Room, Connection, ServerOptions } from "partykit/server"

export default class CounterServer implements Server {
  constructor(readonly room: Room) {}

  options: ServerOptions = {
    hibernate: true,
  }

  // state is a number
  value = 0

  async onStart() {
    this.value = (await this.room.storage.get<number>('value')) || 0
  }

  // when a new connection is made
  onConnect(conn: Connection) {
    // send the latest value
    conn.send(this.value)
  }

  // when a new message is received
  async onMessage(message: string) {
    // handle the message
    switch (message) {
      // reset value to zero
      case 'reset':
        this.value = 0
        break

      // increment by one
      case "increment":
      case "inc":
        this.value++
        break

      // decrement by one
      case "decrement":
      case "dec":
        this.value--
        break

      // otherwise it's a number
      default:
        // so update the value
        this.value = +message
    }

    await this.room.storage.put('value', this.value)

    // the number has changed
    // so update everyone
    this.room.broadcast(this.value)
  }
}
