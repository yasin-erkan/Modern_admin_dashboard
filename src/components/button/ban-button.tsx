'use client';

import {deleteUser} from '@/utils/service';
import {useRouter} from 'next/navigation';
import React, {useState} from 'react';
import {FaSpinner, FaTrash} from 'react-icons/fa';
import {toast} from 'react-toastify';

const BanButton = ({id}: {id: string}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // when delete button is clicked
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    setIsLoading(true);
    deleteUser(id)
      .then(() => {
        toast.success('User deleted');
        router.refresh();
      })
      .catch(() => {
        toast.error('User not deleted');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
      onClick={handleDelete}>
      {isLoading ? <FaSpinner className="animate-spin" /> : <FaTrash />}
    </button>
  );
};

export default BanButton;
