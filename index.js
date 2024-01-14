import { Server } from 'socket.io'
import { createServer } from 'http'

const server = createServer()
const io = new Server(server)


io.on('connection', function(socket){
	//send a message to the client
	socket.emit('hello', 'world');

	//receive a message from the client
	socket.on('howdy', function(arg){
		console.log(arg)
	})
})

server.listen(3000, function(){
	console.log('socket server is running')
})