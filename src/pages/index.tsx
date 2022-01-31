import { NextPage, GetStaticProps } from 'next';
import { getBlogsApi } from '../apis/BlogApi';

import { BlogItemType } from '../types/Blog';

type TopPageProps = {
  blogList: BlogItemType[];
  totalCount: number;
  // profile: Profile;
};

const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
  const { blogList, totalCount } = props;
  return <></>;
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await getBlogsApi(0);
  // const profile = await getProfileApi();

  const props: TopPageProps = {
    blogList: blogData.blogList,
    totalCount: blogData.totalCount,
    // profile: profile,
  };

  return { props };
};

export default TopPage;
