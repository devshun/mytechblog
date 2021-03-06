import Link from 'next/link';
import React, { useLayoutEffect } from 'react';
import { Button } from '@/components/common/atoms/Button';
import { Text } from '@/components/common/atoms/Text';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-999 bg-neutral-900 flex justify-between items-center border-b h-20 p-5'>
      <Text className='ml-8' size='medium'>
        My Tech Blog
      </Text>
      <Link href='profile'>
        <Button className='px-7'>Profile</Button>
      </Link>
    </div>
  );
};
