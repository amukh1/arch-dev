class client {
    constructor(name, room){
      this.user = name
      this.room = room
      this.events = {}
    }
  
    init(bot, token){
      this.token = token
      const WebSocket = require('ws');
  const ws = new WebSocket('wss://api.arch.amukh1.dev')
  
  ws.addEventListener('message', function(event) {
  const payload = event.data
  let data =JSON.parse(payload.toString())
  // console.log(data)
    if(bot.events[data.type]){
      bot.events[data.type](ws, data)
    }else {
      console.log(`couldnt find ${data.type}`)
    }
  }) 
  ws.on('open',()=> {
    ws.send(JSON.stringify({
          type: 'join',
          room: this.room,
          user: this.user,
      }))
  })
    }
  on(event, fun){
      this.events[event] = fun
  }
  
  send(ws, msg,room){
    ws.send(JSON.stringify({
          type: 'msg',
          room: room,
          user: this.user,
      token: this.token,
          msg: {user:this.user, time: new Date().toLocaleTimeString(), msg:msg }
      }))
    }
  
  }
  
  module.exports = {client}