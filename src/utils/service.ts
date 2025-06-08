import {Order, Product, User} from '@/types';

const BaseUrl = 'http://localhost:9090';

// Fetch all orders
const getOrders = async (): Promise<Order[]> => {
  const res = await fetch(`${BaseUrl}/orders`);
  return res.json();
};

// Fetch all products
const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BaseUrl}/products`);
  return res.json();
};

// Fetch a single product by ID
const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products/${id}`);
  return res.json();
};

// Update a product
const updateProduct = async (
  id: string,
  product: Partial<Product>,
): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// Delete a product
const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${BaseUrl}/products/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

// Create a new product
const createProduct = async (
  product: Omit<Product, 'id'>,
): Promise<Product> => {
  const res = await fetch(`${BaseUrl}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// Fetch all users
const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${BaseUrl}/users`);
  return res.json();
};

// Delete a user
const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${BaseUrl}/users/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

// Fetch a single user by ID
const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${BaseUrl}/users/${id}`);
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
};

// Return dashboard summary values
const getValues = async () => {
  const res = await fetch('http://localhost:3001/values', { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch values')
  }
  return res.json()
}

export {
  getOrders,
  getProducts,
  deleteProduct,
  createProduct,
  getProduct,
  updateProduct,
  getUsers,
  deleteUser,
  getUser,
  getValues,
};
