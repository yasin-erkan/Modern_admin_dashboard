'use client';

import icon1 from '@/assets/images/icon-1.webp';
import icon2 from '@/assets/images/icon-2.webp';
import icon3 from '@/assets/images/icon-3.webp';
import icon4 from '@/assets/images/icon-4.png';
import InfoCard from '@/components/card/info-card';
import {InfoCardItem} from '@/types';
import SalesChart from '@/components/home/sales-chart';
import CategoryChart from '@/components/home/category-chart';
import React from 'react';
import {getValues} from '@/utils/service';

export default function Home() {
  const [values, setValues] = React.useState({
    totalOrders: 0,
    totalProducts: 0,
    totalUsers: 0,
    totalRevenue: 0
  });

  React.useEffect(() => {
    const fetchValues = async () => {
      const data = await getValues();
      setValues(data);
    };
    fetchValues();
  }, []);

  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: 'Total Users',
      value: values.totalUsers * 197,
    },
    {
      icon: icon2,
      label: 'Total Orders',
      value: values.totalOrders * 78,
    },
    {
      icon: icon3,
      label: 'Total Sales',
      value: (values.totalRevenue * 254).toLocaleString() + '$',
    },
    {
      icon: icon4,
      label: 'Total Products',
      value: values.totalProducts * 156,
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Panel</h1>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5">
        {cards.map((i, key) => (
          <InfoCard key={key} item={i} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5 my-10">
        <div className="lg:col-span-9">
          <SalesChart />
        </div>

        <div className="lg:col-span-5">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
}
