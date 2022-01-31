import { ImageType } from './Image';

export type BlogItemType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  body: string;
  image: ImageType;
  //   categories: CategoryType[];
};

export type BlogDataType = {
  blogList: BlogDataType[];
  totalCount: number;
};
