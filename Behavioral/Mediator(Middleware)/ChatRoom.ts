// ChatRoom is a mediator between users
class ChatRoom {
  logMessage(user: User, message: string) {
    const time = new Date()
    const sender = user.getName()

    console.log(`${time} [${sender}]: ${message}`)
  }
}

class User {
  name: string
  chatroom: ChatRoom

  constructor(name: string, chatroom: ChatRoom) {
    this.name = name
    this.chatroom = chatroom
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatroom.logMessage(this, message)
  }
}
