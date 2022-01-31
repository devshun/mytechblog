import React from 'react';
import Link from 'next/link';

import { BlogItemType } from '../../../../types/Blog';

import styles from "./styles.module.scss"; 

type Props = {
  blogItem: BlogItemType;
};

export const BlogItem: React.FC<Props> = (props: Props) => {
  const { blogItem } = props;
  return <Link href='[blogId]' as={`/${blogItem.id}`}>
      <div ></div>
  </Link>;
};
