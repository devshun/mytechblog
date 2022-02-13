import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BlogItemType } from '../../../types';

import { Text } from '../atoms/Text';

type Props = {
  blogItem: BlogItemType;
};

export const BlogItem: React.FC<Props> = memo((props: Props) => {
  const { blogItem } = props;

  return (
    <Link href='[blogId]' as={`/${blogItem.id}`}>
      <div className='h-80 w-72 mb-10 flex flex-col  p-5 border rounded-2xl cursor-pointer bg-neutral-800 mx-auto'>
        <div className='p-2'>
          <Text>{blogItem.title}</Text>
        </div>
        {/* <div className='hover:scale-110 transition-all'>
          <img
            src={"https://shop38-makeshop.akamaized.net/shopimages/pgsentame/000000078988_vIep3W4.jpg"}
            alt='Picture'
            // width={blogItem.image.width * 2}
            // height={blogItem.image.height * 2}
            width={"200px"}
            height={"100px"}

          />
        </div> */}
      </div>
    </Link>
  );
});
