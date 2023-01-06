import { useRouter } from 'next/navigation';
import { headers } from './constance';

export default function Head(props: any) {
  const router: any = useRouter();
  console.log(router);
  // console.log(headers.find((o) => o?.value === pathname));
  return (
    <>
      <title>
        {/* {headers.find((o) => o?.value === pathname)?.label || 'Fomex'} */}
      </title>
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </>
  );
}
