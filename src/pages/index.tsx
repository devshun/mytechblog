import { NextPage, GetStaticProps } from 'next';
import { getBlogsApi } from '../apis/BlogApi';

import { BlogItemType } from '../types';

import { TopTemplate } from '../components/pages/TopTemplate';
import { BlogItem } from '../components/common/molecules/BlogItem';
import { initialBlogItem } from '../constants/initialState';

type TopPageProps = {
  blogList: BlogItemType[];
  totalCount: number;
};

const TopPage: NextPage<TopPageProps> = (props: TopPageProps) => {
  const { blogList, totalCount } = props;

  // React.useEffect(() => {

  // })
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
