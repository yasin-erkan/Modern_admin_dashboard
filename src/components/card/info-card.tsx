import React from 'react'
import Image from 'next/image'
import { InfoCardItem } from '@/types'

interface Props {
  item: InfoCardItem
}

export default function InfoCard({ item }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative">
          <Image
            src={item.icon}
            alt={item.label}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-gray-500 text-sm">{item.label}</h3>
          <p className="text-2xl font-semibold">{item.value}</p>
        </div>
      </div>
    </div>
  )
}
