const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection
const mongooseUrl = "mongodb+srv://test99:test123@cluster0.dn10z.mongodb.net/notesyarddatabase?retryWrites=true&w=majority";

mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Import routes
    const customersRoute = require('./routes/customers');
    const accountsRoute = require('./routes/accounts');
    const transactionsRoute = require('./routes/transactions');

    // Use routes
    app.use('/api/customers', customersRoute);
    app.use('/api/accounts', accountsRoute);
    app.use('/api/transactions', transactionsRoute);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
  });
