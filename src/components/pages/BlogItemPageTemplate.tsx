import React from 'react';
import Image from 'next/image';

import { BlogItemType } from '@/types';

type Props = {
  blogItem: BlogItemType;
  draftKey: string;
};

export const BlogItemPageTemplate: React.FC<Props> = (props) => {
  const { blogItem, draftKey } = props;
  console.log(blogItem);

  return (
    <div className='flex justify-center items-center w-2/3'>
      <Image
        className=''
        src={blogItem.image.url}
        alt='Picture'
        width={blogItem.image.width * 2}
        height={blogItem.image.height * 2}
      />
    </div>
  );
};
