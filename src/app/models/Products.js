// Product model structure
export const ProductSchema = {
  name: String,
  description: String,
  price: Number,
  volume: String,
  image: String,
  rating: Number,
  reviews: Number,
  category: String,
  createdAt: Date,
  updatedAt: Date,
}

export const CategorySchema = {
  id: String,
  name: String,
  createdAt: Date,
}
