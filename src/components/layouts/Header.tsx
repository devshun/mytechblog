import React from 'react';
import { Button } from '../common/atoms/Button';
import { Text } from '../common/atoms/Text';

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-999 bg-neutral-900 flex justify-between items-center border-b h-16 p-5'>
      <Text size='medium'>devshun's Tech Blog</Text>
      <Button>Author's Profile</Button>
    </div>
  );
};
