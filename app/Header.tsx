import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from '../images/logo.png';

type IHeaders = {
  label: string;
  value: string;
}

const headers: IHeaders[] = [
  {
    label: 'trang chủ',
    value: '/',
  },
  {
    label: 'giới thiệu',
    value: '/gioi-thieu',
  },
  {
    label: 'ván ép',
    value: '/van-ep',
  },
  {
    label: 'hệ sinh thái fomex',
    value: '/he-sinh-thai-fomex',
  },
  {
    label: 'thành viên',
    value: '/thanh-vien',
  },
  {
    label: 'tin tức',
    value: '/tin-tuc',
  },
  {
    label: 'liên hệ',
    value: '/lien-he',
  },
];

function Header() {
  return (
    <div className='p-10'>
      <div className='w-full xl:w-4/5 m-auto flex justify-between'>
        <Image src={Logo} alt='logo' width={200} height={80} />
        <div className=''>
          {headers?.map((o) => (
            <Link
              href={o?.value}
              className='p-2 bg-white text-green-700 text-lg uppercase mx-3'
            >
              {o?.label}
            </Link>
          ))}
        </div>
        {/* <Link href='/' className='p-2 bg-white text-blue-500 rounded-md'>
          Home
        </Link> */}
      </div>
    </div>
  );
}

export default Header