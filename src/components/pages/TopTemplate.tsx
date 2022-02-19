import React from 'react';

import { BlogItem } from '@/components/common/molecules/BlogItem';
import { Header } from '@/components/layouts/Header';
import { Footer } from '../layouts/Footer';

import { useBlogState } from '../../contexts/BlogContext';

export const TopTemplate: React.VFC = () => {
  const { blogList, totalCount } = useBlogState();

  return (
    <>
      <Header />
      <span className='block h-48' />
      <div className='grid gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-2'>
        {blogList.map((blogItem, i) => (
          <BlogItem key={i} blogItem={blogItem} />
        ))}
      </div>
      <Footer />
    </>
  );
};
