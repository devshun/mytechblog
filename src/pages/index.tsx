import { NextPage, GetStaticProps } from 'next';
import React from 'react';

import { getBlogsApi } from '../apis/BlogApi';

import { BlogItemType } from '../types';

import { TopTemplate } from '../components/pages/TopTemplate';

import { useSetData } from '../hooks/useSetData';

type TopPageProps = {
  blogList: BlogItemType[];
  totalCount: number;
};

const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
  const { blogList, totalCount } = props;

  const { setBlogData } = useSetData();

  React.useEffect(() => {
    setBlogData(blogList, totalCount);
  }, [blogList, totalCount, setBlogData]);

  return <TopTemplate />;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await getBlogsApi(0);
  // const profile = await getProfileApi();

  const props: TopPageProps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
  };
  return { props };
};

export default TopPage;
