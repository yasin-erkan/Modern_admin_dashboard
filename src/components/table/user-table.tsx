import React from 'react';
import TableWrapper from './table-wrapper';
import {getUsers} from '@/utils/service';
import BanButton from '../button/ban-button';
import Link from 'next/link';
import {FaEye} from 'react-icons/fa';

const UserTable = async () => {
  const users = await getUsers();

  return (
    <TableWrapper>
      <thead>
        <tr className="border-b border-zinc-300 shadow">
          <th className="py-4">No</th>
          <th className="py-4">Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>City</th>
          <th>Order Count</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, key) => (
          <tr key={key} className="border-b border-zinc-300 ">
            <td className="py-8">{key + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.country}</td>
            <td>{user.address.city}</td>
            <td>{user.orders?.length || 0}</td>
            <td>
              <div className="flex gap-3">
                <button className="button hover:bg-gray-200 rounded-md">
                  <Link href={`/users?show=${user.id}`}>
                    <FaEye />
                  </Link>
                </button>
                <BanButton id={user.id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default UserTable;
