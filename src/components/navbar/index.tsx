import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiShoppingCart, FiUsers, FiSettings } from 'react-icons/fi'

const menuItems = [
  { icon: <FiHome size={20} />, name: 'Dashboard', url: '/' },
  { icon: <FiShoppingCart size={20} />, name: 'Products', url: '/products' },
  { icon: <FiUsers size={20} />, name: 'Users', url: '/users' },
  { icon: <FiSettings size={20} />, name: 'Settings', url: '/settings' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-white h-screen p-4 shadow-sm">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>

      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                pathname === item.url
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
