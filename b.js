import io from 'socket.io-client'
const channels = {
	MESSAGE: 'message',
	GENERAL: 'general'
}

// Connect to your Socket.IO server (replace 'http://localhost:3000' with the actual server URL if needed)
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTEwOTVlZmM3NzA3YmNiNjQ2YjU2Y2QiLCJlbWFpbCI6InRlc3R1c2VyMUBleGFtcGxlLmNvbSIsImlhdCI6MTcwMTI1Mzc5NywiZXhwIjoxOTYwNDUzNzk3fQ.FTf8buywACZ3d7Ykcj8Zr3qXAUY_Y3Lksm60DKXl7ms"
const socket = io('ws://localhost:3300', { query: { token } });
// const socket = io('ws://localhost:3300');


socket.on('connect', () => {
	console.log('Connected to server');
});


// Disconnect from the server when done
socket.on('disconnect', () => {
	console.log('Disconnected from the server');
});

socket.on(channels.MESSAGE, function (data) {
	console.log('message event')
	console.log({ data })
})

socket.on(channels.GENERAL, function (data) {
	console.log('general event')
	console.log({ data })
})