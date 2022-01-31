/**
 * BlogApi.ts
 * @package apis
 */

// config
import globalAxios from '@/config/globalAxios';

import { BlogDataType } from '@/types/Blog';

import { initialBlogData } from '@/constants/initialState';
import { BLOG_SHOW_COUNT } from '@/constants/config';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:3000/'}/blogs/`;
const QUERY_OFFSET = '?offset=';
const QUERY_LIMIT = '&limit=';

export const getBlogsApi = async (offset: number): Promise<BlogDataType> => {
  const blogData: BlogDataType = initialBlogData;

  try {
    const res = await globalAxios.get(
      BASE_URL + QUERY_OFFSET + offset + QUERY_LIMIT + BLOG_SHOW_COUNT
    );
    blogData.blogList = res.data.contents;
    blogData.blogCount = res.data.totalCount;
  } catch (error) {
    throw new Error('API ERROR: getBlogsApi');
  }
  
  return blogData;
};
