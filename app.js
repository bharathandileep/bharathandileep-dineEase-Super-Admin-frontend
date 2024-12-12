const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();  // Load environment variables from .env file
const cors = require('cors')

const customerRoutes = require('./Routers/customerRouter');
const companyRoutes = require('./Routers/companyRouter');
const KitchenRoutes = require('./Routers/kitchenRouter');
const adminRoutes = require('./Routers/adminRouter');
const menuRoutes = require('./Routers/menuRouter');
const foodproductsRoutes = require('./Routers/foodProductsRouter');
const roleRoutes = require('./Routers/AdminRoleRouter');
const foodSupplyRoutes = require('./Routers/foodSupplyRouter');
const orderDetailsRoutes = require('./Routers/orderDetailsRouter');
const paymentRoutes = require('./Routers/paymentRouter');
const ratingRoutes = require('./Routers/ratingRouter');
const transactionRoutes = require('./Routers/transactionRouter');
const menuItemsRoutes = require('./Routers/menuItemsRouter');
const adminStaffRoutes = require('./Routers/AdminStaffRouter');


const app = express();
// Enable CORS for all routes
app.use(cors());
// const port = 3000;  // Ensure this is the port you are targeting
const port = process.env.PORT || 5000;


// Connect to the database
connectDB();
app.get('/dummyEmbedConfig', (req, res) => {
  res.json({
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=9a767f4e-410f-4a12-8618-c8a32c77c0f5',
      // embedToken: 'dummyEmbedToken',
      reportId: '9a767f4e-410f-4a12-8618-c8a32c77c0f5'
  });
});
//Middleware
app.use(bodyParser.json());

//Routes
app.use('/api/customer', customerRoutes);
app.use('/api/company',companyRoutes);
app.use('/api/kitchen',KitchenRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/menu',menuRoutes);
app.use('/api/foodproducts',foodproductsRoutes);
app.use('/api/role',roleRoutes);
app.use('/api/supplies',foodSupplyRoutes);
app.use('/api/orderdetails', orderDetailsRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/rating', ratingRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/menuitems', menuItemsRoutes);
app.use('/api/adminstaff', adminStaffRoutes);








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


{/* <iframe title="DineEas" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=9a767f4e-410f-4a12-8618-c8a32c77c0f5&autoAuth=true&ctid=a6559aab-1f6d-44bf-a8b3-15cdf30c55d4" frameborder="0" allowFullScreen="true"></iframe> */}