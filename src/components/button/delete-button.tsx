'use client';

import React, {useState} from 'react';
import {deleteProduct} from '@/utils/service';
import {toast} from 'react-toastify';
import {useRouter} from 'next/navigation';

const DeleteButton = ({id}: {id: string}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //when you press the button
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      setIsLoading(true);
      await deleteProduct((id));
      toast.success('Product deleted successfully');
      router.refresh();
    } catch (error) {
      toast.error('Product deletion error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors w-20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteButton;
