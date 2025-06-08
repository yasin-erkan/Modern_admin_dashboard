import {Order, Product, User} from '@/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Fetch all orders
export const getOrders = async (): Promise<Order[]> => {
  try {
    const response = await fetch(`${API_URL}/orders`);
    if (!response.ok) throw new Error('Failed to fetch orders');
    return response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

// Fetch all products
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Fetch a single product by ID
export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`);
  return res.json();
};

// Update a product
export const updateProduct = async (
  id: string,
  product: Partial<Product>,
): Promise<Product> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// Delete a product
export const deleteProduct = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

// Create a new product
export const createProduct = async (
  product: Omit<Product, 'id'>,
): Promise<Product> => {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  return res.json();
};

// Fetch all users
export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });

  return res.json();
};

// Fetch a single user by ID
export const getUser = async (id: string): Promise<User> => {
  const res = await fetch(`${API_URL}/users/${id}`);
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
};

// Return dashboard summary values
export const getValues = async () => {
  try {
    const [orders, products, users] = await Promise.all([
      getOrders(),
      getProducts(),
      getUsers()
    ]);

    return {
      totalOrders: orders.length,
      totalProducts: products.length,
      totalUsers: users.length,
      totalRevenue: orders.reduce((sum, order) => sum + order.total, 0)
    };
  } catch (error) {
    console.error('Error fetching values:', error);
    return {
      totalOrders: 0,
      totalProducts: 0,
      totalUsers: 0,
      totalRevenue: 0
    };
  }
};
