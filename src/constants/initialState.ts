// 初期値を定義

import { BlogItemType, BlogDataType } from '../types';
import { ImageType } from '../types';

export const initialImageState: ImageType = {
  url: '',
  height: 0,
  width: 0,
};

export const initialBlogItem: BlogItemType = {
  id: 'test',
  createdAt: 'test',
  updatedAt: 'test',
  publishedAt: 'test',
  revisedAt: 'test',
  title: 'test',
  body: 'test',
  description: 'test',
  image: initialImageState,
};

export const initialBlogData: BlogDataType = {
    blogList: [],
    totalCount: 0,
  }