import {getOrders} from '@/utils/service';
import TableWrapper from './table-wrapper';
import React from 'react';

const OrderTable = async () => {
  const orders = await getOrders();

  const getColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-blue-600';
      case 'Delivered':
        return 'bg-green-600';
      case 'Processing':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Order Date</th>
          <th>Product Count</th>
          <th>Total Price</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{order.id}</td>
            <td>
              {new Date(order.order_date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'long',
                year: '2-digit',
              })}
            </td>

            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>

            <td className="text-green-600">{order.total_price.toFixed(2)}</td>

            <td>{order.shipping_address.city}</td>

            <td>
              <span
                className={`${getColor(
                  order.status,
                )} text-white py-1 px-2 rounded-lg shadow w-full text-center`}>
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default OrderTable;
