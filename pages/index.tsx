import type { NextPage } from 'next';
import Head from 'next/head';
import { PostCard } from '../components';
import PostWidget from '../components/PostWidget';
import { PostsDocument, usePostsQuery } from '../graphql/generated/graphql';
import { initializeApollo } from '../lib/graphql';

const Home: NextPage = () => {
  const { data } = usePostsQuery();

  return (
    <div className='container px-10 mb-8 mx-auto'>
      <Head>
        <title>CMS Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
        <div className='lg:col-span-2'>
          {data?.postsConnection.edges.map(({ node }) => (
            <PostCard key={node.id} post={node} />
          ))}
        </div>
        <div className='lg:sticky relative top-8'>
          <PostWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const client = initializeApollo();
  await client.query({ query: PostsDocument });

  return { props: { initialApolloState: client.cache.extract() } };
};
