const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const userRoutes = require('./api/routes/_user.Routes');
const memberRoutes = require('./api/routes/_Member.Routes');
const activityRoutes = require('./api/routes/_activity.Routes');
const eventRoutes = require('./api/routes/_event.Routes');
const productRoutes = require('./api/routes/_product.Routes');
const categoryRoutes = require('./api/routes/_category.Routes');

mongoose.connect(
    ('mongodb+srv://minhnhat1999:'+ process.env.mongo_atlas_pw + '@cluster0.nciwx.mongodb.net/ctxh-data?retryWrites=true&w=majority'),
     { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
})


app.use('/api/users', userRoutes);
app.use('/api/member',memberRoutes);
app.use('/api/activity', activityRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;