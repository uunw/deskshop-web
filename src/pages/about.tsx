import NextLink from 'next/link';

import type { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <p>hello my name is nonthaphan instahwong</p>
        <p>this is my ecommerce for learning project</p>

        <p className="mt-5">
          project repository{` `}
          <NextLink
            href="https://github.com/uunw/deskshop-web"
            target="_blank"
            className="font-bold text-blue-400"
          >
            github
          </NextLink>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
