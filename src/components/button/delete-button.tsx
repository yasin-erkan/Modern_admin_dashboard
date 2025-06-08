'use client';

import {toast} from 'react-toastify';
import {deleteProduct} from '@/utils/service';
import {useRouter} from 'next/navigation';

export default function DeleteButton({id}: {id: string}) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      await deleteProduct(id);
      toast.success('Product deleted successfully');
      router.refresh();
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors">
      Delete
    </button>
  );
}
