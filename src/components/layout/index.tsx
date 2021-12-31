import Link from 'next/link';
import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <h1>WHAT I DO.</h1>
        <nav className='flex gap-2'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          <Link href='/post'>
            <a>POST</a>
          </Link>
          <Link href='/calendar'>
            <a>CALENDAR</a>
          </Link>
          <Link href='/achieve'>
            <a>ACHIEVEMENT</a>
          </Link>
          <Link href='/setting'>
            <a>SETTING</a>
          </Link>
          <Link href='/login'>
            <a>LOGIN</a>
          </Link>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  );
};
