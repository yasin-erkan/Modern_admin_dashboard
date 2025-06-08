import Field from '@/components/form/field';
import ImagePreview from '@/components/form/image-preview';
import {Product} from '@/types';
import {categories, inputs} from '@/utils/constants';
import {createProduct, getProduct, updateProduct} from '@/utils/service';
import {redirect} from 'next/navigation';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import React from 'react';

// Function to be used during the action
// With this method, we can manage the form without making it a client component
const handleSubmit = async (formData: FormData) => {
  'use server'; // server action

  // Get the form data
  const id = formData.get('id') as string;
  const name = formData.get('name') as string;
  const brand = formData.get('brand') as string;
  const price = formData.get('price') as string;
  const stock = formData.get('stock') as string;
  const rating = formData.get('rating') as string;
  const reviews_count = formData.get('reviews_count') as string;
  const category = formData.get('category') as string;
  const image_url = formData.get('image_url') as string;
  const description = formData.get('description') as string;

  // Create product data object
  const productData: Omit<Product, 'id'> = {
    name,
    brand,
    category,
    description,
    image_url,
    price: parseFloat(price),
    stock: parseInt(stock),
    rating: parseFloat(rating),
    reviews_count: parseInt(reviews_count),
  };

  try {
    if (id) {
      await updateProduct(id, productData);
    } else {
      await createProduct(productData);
    }

    redirect(`/products`);
  } catch (error) {
    console.log(error);
    throw new Error('Product creation error');
  }
};

// ! Form Component
function ProductForm({product}: {product: Product | null}) {
  return (
    <form action={handleSubmit} className="space-y-6">
      {/* We hide the input to pass the id within the handle submit when in edit mode */}
      {product && <input type="hidden" name="id" value={product?.id} />}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                id={input.name}
                name={input.name}
                type={input.type}
                className="input"
                required
                defaultValue={product?.[input.name as keyof Product]}
              />
            </Field>
          ))}

          <Field htmlFor="category" label="Category">
            <select
              name="category"
              id="category"
              className="input"
              required
              defaultValue={product?.category}>
              <option value="">Select Category</option>
              {categories.map((cat, key) => (
                <option key={key} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Image Input */}
          <Field htmlFor="image_url" label="Image URL">
            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              required
              defaultValue={product?.image_url}
            />
          </Field>

          {/* Image Preview */}
          <ImagePreview imageInputId="image_url" />

          {/* Description Input */}
          <Field htmlFor="description" label="Description">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:min-h-[220px]"
              rows={5}
              required
              defaultValue={product?.description}></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-2 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed">
          {product ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}

// Page Type for Form
type Props = {
  params: Promise<{slug: string[]}>;
};

// !Form Page
export default async function FormPage({params}: Props) {
  // Get parameters from the URL
  const {slug} = await params;

  // Variable to hold the product data for editing
  let product: Product | null = null;

  // If it's the "edit page
  if (slug[0] === 'edit' && slug[1]) {
    try {
      // Get the product details to edit
      product = await getProduct(slug[1]);

      // If product is not found, redirect to 404 page
      if (!product) notFound();
    } catch (error) {
      notFound();
    }
  }

  // Set the page title
  const pageTitle = product ? 'Edit Product' : 'Create New Product';

  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{pageTitle}</h1>

        <Link
          href={'/products'}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors">
          Back
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}
