import React from 'react';

import { MetaHeadType } from '../../types/MetaHead';

export type Props = {
  children: React.ReactNode;
  metaData: MetaHeadType;
  breadName?: string;
};

export const BasePostPageLayout: React.VFC<Props> = (props: Props) => {
  const { children, metaData, breadName } = props;
  return <div></div>;
};
