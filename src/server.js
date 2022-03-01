const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/style')));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('')
})
app.listen(process.env.port, error => {
	if(error) return console.log(error);
	console.log('ONLINE!')
})