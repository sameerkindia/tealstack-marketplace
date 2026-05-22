import mongoose, { Schema, models } from 'mongoose';

const productSchema = new Schema({
  storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  fileUrl: { type: String, required: true }, // The private URL for your secure streaming API
  isPublished: { type: Boolean, default: false }
}, { timestamps: true });

export const Product = models.Product || mongoose.model('Product', productSchema);