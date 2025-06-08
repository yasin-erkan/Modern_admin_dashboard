import React, {Suspense} from 'react';
import Loading from '../loading';
import OrderTable from '@/components/table/order-table';

const OrdersPage = () => {
  return (
    <div className="page">
      <h1 className="title">Orders</h1>

      <Suspense fallback={<Loading className="my-20" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
};

export default OrdersPage;
