import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BlogItemType } from '../../../types';

import { Text } from '../atoms/Text';

import { format, parseISO } from 'date-fns';

type Props = {
  blogItem: BlogItemType;
};

export const BlogItem: React.FC<Props> = memo((props: Props) => {
  const { blogItem } = props;

  return (
    <Link href='[blogId]' as={`/${blogItem.id}`}>
      <div className='h-80 w-80 mb-14 flex flex-col mx-auto justify-between border rounded-2xl cursor-pointer bg-neutral-800 hover:border-gray-500'>
        <div className='h-2/5 flex flex-col justify-between mt-1'>
          <Text className='px-8 py-6'>{blogItem.title}</Text>
          <Text size='xsmall' className='text-gray-400 text-center'>
            {format(parseISO(blogItem.publishedAt), 'yyyy/MM/dd')}
          </Text>
        </div>
        <div className='overflow-hidden h-3/5 w-9/10 flex items-center rounded-2xl mx-3 my-2'>
          {blogItem.image && (
            <Image
              className='hover:scale-105 transition-all'
              src={blogItem.image.url}
              alt='Picture'
              width={blogItem.image.width * 2}
              height={blogItem.image.height * 2}
            />
          )}
        </div>
      </div>
    </Link>
  );
});
