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

  console.log(blogItem);
  return (
    <Link href='[blogId]' as={`/${blogItem.id}`}>
      <div className='h-80 w-80 mb-10 flex flex-col justify-between border rounded-2xl cursor-pointer bg-neutral-800 mx-auto hover:scale-105 transition-all'>
        <div className='h-2/5 flex flex-col justify-between my-3'>
          <Text className='px-8 py-6'>{blogItem.title}</Text>
          <Text size='xsmall' className='text-gray-400 text-center'>
            {format(parseISO(blogItem.publishedAt), 'yyyy/MM/dd')}
          </Text>
        </div>
        <div className='overflow-hidden flex mx-auto items-center h-3/5 w-9/10 p-3'>
          {blogItem.image && (
            <Image
              className='rounded-md'
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
