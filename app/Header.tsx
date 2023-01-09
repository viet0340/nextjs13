'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Logo from '../images/logo.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { headers } from './constance';

function Header() {
  const pathname = usePathname();
  // console.log('pah: ', pathname)
  return (
    <div>
      <div className='p-10'>
        <div className='w-full xl:w-4/5 m-auto flex justify-between'>
          <div>
            <Link href='/'>
              <Image src={Logo} alt='logo' width={200} height={80} />
            </Link>
          </div>
          <div>
            <div className='mb-3 text-right mr-4'>
              <Link
                href='/tracking'
                className='text-green-700 border-green-700 border rounded-lg p-1'
              >
                Tracking
              </Link>
            </div>
            <div>
              {headers?.map((o, i) => (
                <Link
                  href={o?.value}
                  key={i}
                  className='p-2 bg-white text-green-700 text-lg uppercase mx-2 font-normal'
                >
                  {o?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {pathname === '/' && (
        <Carousel autoPlay showThumbs={false} showArrows>
          <div>
            <img src='https://fomexgroup.vn/upload/img/banner/bannner-fmx1.jpg' />
            <p className='legend'>Legend 1</p>
          </div>
          <div>
            <img src='https://fomexgroup.vn/upload/img/banner/banner-2-11.jpg' />
            <p className='legend'>Legend 2</p>
          </div>
        </Carousel>
      )}
      {pathname !== '/' && (
        <div className='relative'>
          <img
            className='w-full h-auto'
            src='https://fomexgroup.vn/upload/img/banner/dscf2254-31.jpg'
          />
          <span className='absolute top-2/3 right-1/2 translate-x-1/2 p-3 px-40 text-white bg-g uppercase bg-green-800 border rounded-md border-transparent text-2xl bg-opacity-70 font-medium'>
            {headers.find((o) => o?.value === pathname)?.label}
          </span>
        </div>
      )}
    </div>
  );
}

export default Header;
