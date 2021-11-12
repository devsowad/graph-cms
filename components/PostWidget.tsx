import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMoment from 'react-moment';
import { useRecentPostQuery } from '../graphql/generated/graphql';

interface Props {
  slug?: string;
}

const PostWidget: React.FC<Props> = ({ slug }) => {
  const { data } = useRecentPostQuery({ ssr: false });
  console.log(data);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {data?.posts.map((post, index) => (
        <div key={index} className='flex items-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              height='60px'
              width='60px'
              className='align-middle rounded-full'
            />
          </div>
          <div className='flex-grow ml-4'>
            <ReactMoment
              className='text-gray-500 font-xs'
              format={'MMM DD, YYYY'}
            >
              {post.createdAt}
            </ReactMoment>
            <Link href={`/post/${post.slug}`} passHref key={index}>
              <a className='text-md'>{post.title}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
