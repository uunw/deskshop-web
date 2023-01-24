import { NextSeo } from 'next-seo';

import type { NextPageWithLayout } from '../_app';

const AuthForgotPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title={`ลืมรหัสผ่าน`} />

      <div>
        <h1>Forgot</h1>
      </div>
    </>
  );
};

export default AuthForgotPage;
