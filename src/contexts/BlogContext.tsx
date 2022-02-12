import React, { useReducer } from 'react';

import { BlogItemType, BlogDataType } from '../types';

import { initialBlogData } from '../constants/initialState';

export type BlogStateType = {
  blogList: BlogItemType[];
  totalCount: number;
};

const initialState: Readonly<BlogStateType> = {
  blogList: [],
  totalCount: 0,
};

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

type Props = {
  children: React.ReactNode;
};

export const BlogContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(BlogReducer, initialState);

  return (
    <BlogDispatchContext.Provider value={dispatch}>
      <BlogStateContext.Provider value={state}>{children}</BlogStateContext.Provider>
    </BlogDispatchContext.Provider>
  );
};

export const useBlogState = () => React.useContext(BlogStateContext);
export const useBlogDispatch = () => React.useContext(BlogDispatchContext);
