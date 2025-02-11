import type { Server, Room, Connection } from "partykit/server"

export default class CounterServer implements Server {
  constructor(readonly room: Room) {}

  value = 0

  onConnect(conn: Connection) {
    conn.send(this.value)
  }

  onMessage(message: string) {
    switch (message) {
      case 'reset':
        this.value = 0
        break

      case "increment":
      case "inc":
        this.value++
        break

      case "decrement":
      case "dec":
        this.value--
        break

      default:
        this.value = +message
    }

    this.room.broadcast(this.value)
  }
}
