import React from 'react';

type Props = {
  highLightedBody: string;
};

export const BlogBody: React.FC<Props> = (props) => {
  const { highLightedBody } = props;
  return (
    <div className='' dangerouslySetInnerHTML={{ __html: highLightedBody }} />
  );
};
