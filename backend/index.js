const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dns = require("dns");
const path = require('path');
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = require("./config/db.js");
dotenv.config();

connectDB();            //connect databse code 


const app = express();
app.use(cors(
    {
        origin: ["http://localhost:3000", "http://127.0.0.1:3000", process.env.FRONTEND_URL],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/',(req,res) => {
    res.send("Vastram backend is connected")
})

app.use('/api/auth',require("./routes/authRoutes"));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Vastram API is running in Development mode...');
  });
}


const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>{                         //this listen to the const app
    console.log (`server is running on port ${PORT}`)
})