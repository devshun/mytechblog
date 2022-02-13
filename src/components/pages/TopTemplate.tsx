import React from 'react';

import { BlogItem } from '../common/molecules/BlogItem';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';

import { useBlogState } from '../../contexts/BlogContext';

export const TopTemplate: React.VFC = () => {
  const { blogList, totalCount } = useBlogState();

  return (
    <>
      <Header />
      <span className='block h-48' />
      <div className='grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {blogList.map((blogItem, i) => (
          <BlogItem key={i} blogItem={blogItem} />
        ))}
      </div>

      <Footer />
    </>
  );
};
