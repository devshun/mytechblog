import globalAxios from '@/config/globalAxios';

import { BlogDataType } from '@/types';

import { initialBlogData, initialBlogItem } from '@/constants/initialState';
import { BLOG_SHOW_COUNT } from '@/constants/config';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/`;
// const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000/'}/blogs/`;
const QUERY_OFFSET = '?offset=';
const QUERY_LIMIT = '&limit=';

export const getBlogsApi = async (offset: number): Promise<BlogDataType> => {
  const blogData: BlogDataType = initialBlogData;

  try {
    const res = await globalAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + BLOG_SHOW_COUNT
    );
    blogData.blogList = res.data.contents;
    blogData.totalCount = res.data.totalCount;
  } catch (error) {
    console.log(error);
    throw new Error('API ERROR: getBlogsApi');
  }

  return blogData;
};

export const getBlogByIdApi = async (id: string, draftKey: string) => {
  let blogDetail = initialBlogItem;
  try {
    const res = await globalAxios.get(
      `${BASE_URL}${id}${draftKey !== '' ? draftKey : ''}`
    );
    blogDetail = res.data;
  } catch (e) {
    throw new Error('API ERROR: getBlogByIdApi');
  }
  console.log(blogDetail);

  return blogDetail;
};
