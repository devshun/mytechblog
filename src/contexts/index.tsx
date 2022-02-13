import React from 'react';

import { BlogContextProvider } from './BlogContext';

type Props = {
  children: React.ReactNode;
};

export const RootContextProvider: React.FC<Props> = ({ children }) => {
  return <BlogContextProvider>{children}</BlogContextProvider>;
};
