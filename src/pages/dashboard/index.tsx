import type { User } from '@supabase/auth-helpers-nextjs';
import type { GetServerSidePropsContext } from 'next';

import DashboardTemplate from '@/components/template/DashboardTemplate';
import { supbaseServerClient } from '@/libs/supabase';

import type { NextPageWithLayout } from '../_app';

interface IProps {
  user: User;
  data: any;
}

const DashboardHomePage: NextPageWithLayout<IProps> = ({ user, data }) => {
  return (
    <>
      <h1>hi</h1>

      <div>Protected content for {user.email}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

DashboardHomePage.getLayout = (page) => {
  return <DashboardTemplate>{page}</DashboardTemplate>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = supbaseServerClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: `/`,
        permanent: false,
      },
    };

  // Run queries with RLS on the server
  const { data } = await supabase.from(`users`).select(`*`);

  return {
    props: {
      initialSession: session,
      user: session.user,
      data: data ?? [],
    },
  };
};

export default DashboardHomePage;
