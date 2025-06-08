import {ChartData} from '@/types';
import DoughnutGraph from '../graphic/doughnut-graph';
import {getProducts} from '@/utils/service';
import React from 'react';

export default async function CategoryChart() {
  // Get products from API
  const products = await getProducts();

  // Convert categories to unique array
  const labels = [...new Set(products.map(product => product.category))];

  // Count products per category
  const object: Record<string, number> = {};

  products.forEach(product => {
    object[product.category] = (object[product.category] || 0) + 1;
  });

  const data: ChartData = {
    labels,
    datasets: [
      {
        label: 'Products in Category',
        data: Object.values(object),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5">
      <h2 className="subtitle">Category Chart</h2>

      <DoughnutGraph data={data} />
    </div>
  );
}
