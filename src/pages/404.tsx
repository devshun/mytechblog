import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { Error404PageTemplate } from '@/components/pages/404Template';

const Error404Page: NextPage = () => {
  return <Error404PageTemplate />;
};

// export const getStaticProps: GetStaticProps = async () => {

// }

export default Error404Page;
