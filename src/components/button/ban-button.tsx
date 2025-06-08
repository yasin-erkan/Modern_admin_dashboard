'use client';

import {toast} from 'react-toastify';
import {deleteUser} from '@/utils/service';
import {useRouter} from 'next/navigation';

export default function BanButton({id}: {id: string}) {
  const router = useRouter();

  const handleBan = async () => {
    try {
      await deleteUser(id);
      toast.success('User banned successfully');
      router.refresh();
    } catch (error) {
      toast.error('Failed to ban user');
    }
  };

  return (
    <button
      onClick={handleBan}
      className="px-3 py-1 text-sm text-red-600 hover:text-red-800 transition-colors">
      Ban
    </button>
  );
}
