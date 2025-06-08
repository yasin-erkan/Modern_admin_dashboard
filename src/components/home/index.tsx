import React from 'react'
import InfoCard from '../card/info-card'
import { InfoCardItem } from '@/types'
import SalesChart from './sales-chart'
import CategoryChart from './category-chart'
import icon1 from '@/assets/images/icon-1.webp'
import icon2 from '@/assets/images/icon-2.webp'
import icon3 from '@/assets/images/icon-3.webp'
import icon4 from '@/assets/images/icon-4.png'
import { getValues } from '@/utils/service'

export default async function Dashboard() {
  const values = await getValues()
  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: 'Total Users',
      value: values.total_users * 197,
    },
    {
      icon: icon2,
      label: 'Total Orders',
      value: values.total_orders * 78,
    },
    {
      icon: icon3,
      label: 'Total Sales',
      value: (values.total_price * 254).toLocaleString() + '$',
    },
    {
      icon: icon4,
      label: 'Total Products',
      value: values.total_products * 156,
    },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Admin Panel</h1>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {cards.map((item, index) => (
          <InfoCard key={index} item={item} />
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
  )
} 