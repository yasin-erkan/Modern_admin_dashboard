import {TiHome} from 'react-icons/ti';
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from 'react-icons/fa';
import {IoIosPricetags} from 'react-icons/io';
import {Option} from '@/types';

export const sections: Option[] = [
  {
    icon: <TiHome />,
    name: 'Home',
    url: '/',
  },

  {
    icon: <FaDiceD6 />,
    name: 'Products',
    url: '/products',
  },

  {
    icon: <FaUsers />,
    name: 'Users',
    url: '/users',
  },
  {
    icon: <IoIosPricetags />,
    name: 'Orders',
    url: '/orders',
  },

  {
    icon: <FaChartArea />,
    name: 'Charts',
  },
  {
    icon: <FaHeart />,
    name: 'Favorites',
  },
  {
    icon: <FaBox />,
    name: 'Inventory',
  },
  {
    icon: <FaCog />,
    name: 'Settings',
  },
];

export const inputs = [
  {
    label: 'Product Name',
    name: 'name',
    type: 'text',
  },
  {
    label: 'Brand',
    name: 'brand',
    type: 'text',
  },
  {
    label: 'Price (₺)',
    name: 'price',
    type: 'number',
  },
  {
    label: 'Stock',
    name: 'stock',
    type: 'number',
  },
  {
    label: 'Rating (0-5)',
    name: 'rating',
    type: 'number',
    defaultValue: 0,
    min: 0,
    max: 5,
  },
  {
    label: 'Comment Count',
    name: 'reviews_count',
    type: 'number',
    defaultValue: 0,
  },
];

export const categories = [
  'Electronics',
  'Clothing',
  'Accessories',
  'Home',
  'Books',
];
