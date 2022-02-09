import React from 'react';

import { BlogItemType, BlogDataType } from '../types';

import { initialBlogData } from '../constants/initialState';

const ActionType = {
  SET: 'SET_BLOG',
};

export const setBlogList = (blogList: BlogItemType[], totalCount: number) => ({
  type: ActionType.SET,
  payload: {
    blogList,
    totalCount,
  },
});

type BlogActionType = ReturnType<typeof setBlogList>;

const BlogReducer = (state: BlogDataType, action: BlogActionType) => {
  switch (action.type) {
    case ActionType.SET:
      return {
        ...state,
        blogList: action.payload.blogList,
        totalCount: action.payload.totalCount,
      };
    default:
      throw new Error('Invalid Action Type');
  }
};

type BlogDispatchType = React.Dispatch<BlogActionType>;
//  要確認
const BlogStateContext = React.createContext(initialBlogData as BlogDataType);
const BlogDispatchContext = React.createContext<BlogDispatchType>(() => {
  throw new TypeError('Context not provided');
});
