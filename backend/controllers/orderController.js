const Order = require('../model/Order');
const sendEmail = require('../utils/sendEmail');

const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;
    if (items && items.length === 0) {
      return res.status(400).json({ message: 'invalid order data' });
    } else {
      const order = new Order({
        userId: req.user._id,
        items,
        totalAmount,
        address,
        paymentId
      });

      await order.save();

      // Send Order Confirmation Email
      const message = `
        <h2>Order Confirmation</h2>
        <p>Hello ${req.user.name},</p>
        <p>Your order has been successfully placed! Order ID: <strong>${createdOrder._id}</strong></p>
        <p>Total Amount Paid: $${totalAmount.toFixed(2)}</p>
        <p>It will be shipped to: ${address.street}, ${address.city}</p>
        <p>Thank you for shopping with ShopNest!</p>
      `;

      await sendEmail(req.user.email, 'order created',message);
        
      res.status(201).json({message: "createdOrder succesfully",order});
    }
  } catch (error) {
    res.status(500).json({ message: 'error creating order',order });
  }
};

const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items.productId','name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "error fetchingn order",error});
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('userId', 'id name');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'error fetching order', order });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const {status} = req.body;
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status =status;
      await order.save();
      res.json({message: "order status updated",order});
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'errpr updateing otrder stust',error });
  }
};


module.exports = {
    createOrder, 
    myOrders,
    getOrders,
    updateOrderStatus
}