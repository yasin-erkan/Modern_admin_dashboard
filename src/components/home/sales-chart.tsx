import {getOrders} from '@/utils/service';
import LineGraph from '../graphic/line-graph';
import {ChartData} from '@/types';
import React from 'react';

export default async function SalesChart() {
  // Get order data from API
  const orders = await getOrders();

  // Format data for chart
  const labels: string[] = orders.map(order => order.order_date);

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: 'Sales Amount',
        data: orders.map(order => order.total_price),
        borderColor: 'rgb(0, 150, 255)',
        backgroundColor: 'rgba(0, 150, 255, 0.5)',
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="subtitle">Sales Chart</h2>

      <LineGraph data={data} />
    </div>
  );
}
