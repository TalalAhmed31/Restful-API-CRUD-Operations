const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorPaymentsSchema = new Schema({
    transactio_id:{
        type: String,
        required: true,
        unique: true,
    },
    vendor_id:{
        type: String,
        required: true,
        unique: true,
    },
    invoice_no:{
        type: Number,
        required:true,
        unique:true,
    },
    payment_duedate:{
        type:Date,
        default: new Date(),
        required: true,
    },
    payment_date:{
        type: Date,
    },
    amount:{
        type: Number,
        required: true,
    },
    balance_amount:{
        type: Number,
        required: true,
    },
    payment_status:{
        type: String,
        enum: ['Unpaid', 'Partially Paid', 'Fully Paid'],
        required: true,
    }
}, {
    // creates timestamps at read/update function
    timestamps: true, 
});

module.exports = mongoose.model("VendorPayments", vendorPaymentsSchema)