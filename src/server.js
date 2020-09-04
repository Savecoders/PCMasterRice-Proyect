const express = require('express');
const express_hub = require('express-handlebars');
const path = require('path');
const app = express();
//routers
app.use(require('./routers/index.routes'));
//the port public
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
//hbs
app.engine(
	'.hbs',
	express_hub({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	})
);
app.set('view engine', '.hbs');

//static files
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
