import {BiSolidBellRing} from 'react-icons/bi';
import Input from './header/input';
import Image from 'next/image';
import userImage from '@/assets/images/user_image.webp';
import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-zinc-300 bg-white flex justify-between p-5 md:px-8">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700" />

        <div className="flex gap-3">
          <Image
            src={userImage}
            alt="avatar"
            width={50}
            height={50}
            className="size-12 rounded-full"
          />

          <div>
            <p className="font-semibold text-black">Yasin ERKAN</p>
            <p className="text-sm text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
} 