import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BlogItemType } from '../../../types';

type Props = {
  blogItem: BlogItemType;
};

export const BlogItem: React.FC<Props> = (props: Props) => {
  const { blogItem } = props;

  return (
    <Link href='[blogId]' as={`/${blogItem.id}`}>
      <div className='flex cursor-pointer py-2.5 px-5 mb-16'>
        <div className='min-w-330 max-w-330 overflow-hidden drop-shadow rounded-sm delay-50 hover:opacity-50 hover:scale-110 '>
          <Image
            src={blogItem.image.url}
            alt='Picture'
            width={blogItem.image.width * 2}
            height={blogItem.image.height * 2}
          />
        </div>
        <div className='ml-5'>
          <h2 className='pt-1 text-lg font-bold tracking-widest leading-6'>{blogItem.title}</h2>
        </div>
        <div className='mt-4'>2021/10/11</div>
      </div>
    </Link>
  );
};
