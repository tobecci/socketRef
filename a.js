import io from 'socket.io-client'
const channels = {
	MESSAGE: 'message',
	GENERAL: 'general'
}

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTEwOTI0ZWMyYzlmYzNlZmQyYjA1NmIiLCJlbWFpbCI6Im9qaW5ha2F0b2NodWt3dUBnbWFpbC5jb20iLCJpYXQiOjE3MDEyNTM4NDAsImV4cCI6MTk2MDQ1Mzg0MH0.WzqvS7egAUusdvfZwxSK72sgqBKYFm6BcZJDmGgfLG8"
const socket = io('ws://localhost:3300', { query: { token } });
// const socket = io('ws://localhost:3000');

socket.on('connect', () => {
	console.log('Connected to server');
});


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



