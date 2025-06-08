import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {getProducts} from '@/utils/service';
import DeleteButton from '@/components/button/delete-button';

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="page">
      <div className="flex justify-between items-center mb-6">
        <h1 className="title">Products</h1>
        <Link
          href="/products/create"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Product
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 2xl:grid-cols-4 gap-6 ">
        {products.map(product => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden ">
            <div className="relative h-48 w-full">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="p-4 flex flex-col flex-1 justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                <p className="text-sm text-gray-700 mb-2 line-clamp-2 ">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 mr-1">⭑</span>
                  <span className="text-sm">
                    {product.rating} ({product.reviews_count} comments)
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex justify-between">
                    <Link
                      href={`/products/edit/${product.id}`}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-colors">
                      Edit
                    </Link>

                    <DeleteButton id={product.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
