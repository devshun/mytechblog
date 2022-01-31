// 初期値を定義

import { BlogItemType, BlogDataType } from '@/types/Blog';
import { ImageType } from '@/types/Image';

export const initialImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
};

export const initialBlogItem: BlogItemType = {
  id: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
  revisedAt: '',
  title: '',
  body: '',
  description: '',
  image: initialImageState,
  categories: [],
};

export const initialBlogData: BlogDataType = {
    blogList: [],
    totalCount: 0,
  }