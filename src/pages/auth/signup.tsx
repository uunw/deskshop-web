import NextImage from 'next/image';
import NextLink from 'next/link';

import AuthTemplate from '@/components/template/AuthTemplate';
import AppImage from '@/public/IDS.png';
import { AppConfig } from '@/utils/AppConfig';

import type { NextPageWithLayout } from '../_app';

const AuthSignUpPage: NextPageWithLayout = () => {
  return (
    <>
      <div>
        <NextLink href="/">
          <NextImage
            className="mx-auto h-20 w-auto rounded-lg shadow"
            src={AppImage}
            alt={AppConfig.title}
            placeholder="blur"
            loading="lazy"
          />
        </NextLink>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {`สมัครสมาชิก`}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          หรือ{` `}
          <NextLink
            href="/auth/signin"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            {`มีบัญชีอยู่แล้ว`}
          </NextLink>
        </p>
      </div>
    </>
  );
};

AuthSignUpPage.getLayout = (page) => {
  return (
    <>
      <AuthTemplate>{page}</AuthTemplate>
    </>
  );
};

export default AuthSignUpPage;
