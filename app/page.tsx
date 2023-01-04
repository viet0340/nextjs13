import { useRouter } from 'next/navigation';
import React from 'react'

function Home() {
  const router = useRouter();
  console.log(router);
  return <div className='text-red-500'>I am the home page</div>;
}

export default Home