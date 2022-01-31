import { ImageProps } from "./Image";

export type BlogItemProps = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  body: string;
  image: ImageProps;
//   categories: CategoryProps[];
};
