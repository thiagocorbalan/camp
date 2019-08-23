const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router  = new express.Router();

const app = express();

// const corsOptions = {
//   origin: 'http://localhost:2012',
//   optionsSuccessStatus: 200
// }


router.get('/expense', (req, res) => {
	return res.json({"OK": true}); 
});
router.post('/expense', (req, res) => {
	return res.json({"OK": true}); 
});


app.use(router);


app.use(cors("*"));
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(require('./routes/index.routes'));


app.listen(3300);