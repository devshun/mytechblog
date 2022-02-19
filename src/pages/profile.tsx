import { GetStaticProps, NextPage } from 'next';
import React from 'react';

import { ProfilePageTemplate } from '@/components/pages/ProfilePageTemplate';

const ProfilePage: NextPage = () => {
  return <ProfilePageTemplate />;
};

// export const getStaticProps: GetStaticProps = async () => {

// }

export default ProfilePage;
