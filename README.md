## 🎈 Hibernating Counter

An example [PartyKit](https://partykit.io) server that counts a number *and* can hibernate.

It keeps track of a single number, and pushes out the value whenever the number changes.

After 10 seconds without any changes, it spins down.

## Messages

| Message              | Description                   |
| -----                | ------                        |
| `inc` or `increment` | Increment the number by 1     |
| `dec` or `decrement` | Decrement the number by 1     |
| `reset`              | Reset the number to zero      |
| nnn                  | Set the number to a new value |

## License

MIT
