import NextImage from 'next/image';
import NextLink from 'next/link';
import type { FC } from 'react';

import AppImage from '@/public/IDS.png';
import { AppConfig } from '@/utils/AppConfig';

const AuthHeader: FC = () => {
  return (
    <>
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
        {`เข้าสู่ระบบด้วยบัญชีของคุณ`}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        หรือ{` `}
        <NextLink
          href="/auth/signup"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {`เริ่มใช้งานวันนี้ ฟรี`}
        </NextLink>
      </p>
    </>
  );
};

export default AuthHeader;
