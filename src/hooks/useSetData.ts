//

import React, { useCallback } from 'react';
import { setBlogList, useBlogDispatch } from '@/contexts/BlogContext';
import { BlogItemType } from '@/types';

export const useSetData = () => {
  const dispatchBlog = useBlogDispatch();

  const setBlogData = React.useCallback(
    (blogList: BlogItemType[], totalCount: number) => {
      dispatchBlog(setBlogList(blogList, totalCount));
    },
    [dispatchBlog]
  );

  return { setBlogData };
};
