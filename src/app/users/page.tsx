import UserTable from '@/components/table/user-table';
import React, {Suspense} from 'react';
import Loading from '../loading';
import UserModal from '@/components/modal/user-modal';
import {notFound} from 'next/navigation';

type Props = {
  searchParams: Promise<{show?: string}>;
};

export default async function Users({searchParams}: Props) {
  // url'deki show parametresini al
  const {show} = await searchParams;

  // Eğer show parametresi varsa ve geçerli bir ID ise modalı göster
  if (show && show.trim() !== '') {
    try {
      return (
        <div className="page">
          <h1 className="title">Users</h1>

          <Suspense fallback={<Loading />}>
            <UserTable />
          </Suspense>

          <UserModal userId={show} />
        </div>
      );
    } catch (error) {
      notFound();
    }
  }

  // Normal kullanıcı listesi görünümü
  return (
    <div className="page">
      <h1 className="title">Users</h1>

      <Suspense fallback={<Loading />}>
        <UserTable />
      </Suspense>
    </div>
  );
}
