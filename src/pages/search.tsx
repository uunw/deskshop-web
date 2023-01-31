import type { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import Navbar from '@/components/layouts/Navbar';

import type { NextPageWithLayout } from './_app';

interface IProps {
  searchQuery: string;
}

const SearchPage: NextPageWithLayout<IProps> = ({ searchQuery }) => {
  // const router = useRouter();
  // const searchQuery: string = String(router.query.q);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <NextSeo title={`ผลการค้นหา ${searchQuery}`} />
      <div>
        <h1>Search</h1>
      </div>
    </>
  );
};

SearchPage.getLayout = (page) => {
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return { props: { searchQuery: query.q } };
};

export default SearchPage;
