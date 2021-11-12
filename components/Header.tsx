import React from 'react';
import Link from 'next/link';

interface Props {
  //
}

const Header: React.FC<Props> = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/' passHref>
            <a className='cursor-pointer font-semibold text-4xl text-white'>
              Graph CMS
            </a>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          <Link href={`/category/${'category'}`} passHref>
            <a className='md:float-right mt-2 align-middle text-white ml-4 font-medium cursor-pointer'>
              category
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
