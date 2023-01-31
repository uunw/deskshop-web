import { LockClosedIcon } from '@heroicons/react/20/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Session } from '@supabase/supabase-js';
import type { GetServerSidePropsContext, NextPage } from 'next';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { supbaseServerClient } from '@/libs/supabase';
import { signInPassword } from '@/libs/supabase/auth';
import AppImage from '@/public/IDS.png';
import { log } from '@/utils';
import { AppConfig } from '@/utils/AppConfig';

interface IForm {
  email: string;
  password: string;
}

const formSignInSchema = z.object({
  email: z.string().email(`รูปแบบอีเมลไม่ถูกต้อง`),
  password: z.string().min(6),
});

interface IProps {
  session: Session | null;
}

const AuthSignInPage: NextPage<IProps> = ({ session }) => {
  // const session = useSession();
  // const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (session) {
      window.close();
    }
  }, [session]);

  const { handleSubmit, register, formState, setError } = useForm<IForm>({
    resolver: zodResolver(formSignInSchema),
  });

  const onSubmit = async (value: IForm) => {
    log(value);

    const { data, error } = await signInPassword(value);

    if (error) {
      throw new Error(error.message);
      // console.error(error.message);
    } else {
      console.log(data);

      window.close();
    }
  };

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
          {`เข้าสู่ระบบ`}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          หรือ{` `}
          <NextLink
            href="/auth/signup"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            {`ยังไม่ได้สมัครสมาชิก`}
          </NextLink>
        </p>
      </div>

      <form
        className="space-y-6 rounded-lg bg-white px-10 py-7 shadow"
        onSubmit={(e) => {
          handleSubmit(onSubmit)(e)
            // you will have to catch those error and handle them
            .catch((_reason) => {
              setError(`email`, { message: `ข้อมูลผู้ใช้งานไม่ถูกต้อง` });
            });
        }}
      >
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <label htmlFor="email">{`อีเมล`}</label>
            <input
              id="email"
              type="email"
              {...register(`email`, {
                required: true,
              })}
              className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
            {formState.errors.email && (
              <p className="text-red-600">{formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <label htmlFor="password">{`รหัสผ่าน`}</label>
            <input
              id="password"
              type="password"
              {...register(`password`, {
                required: true,
                min: 6,
                max: 255,
              })}
              className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              {`จำฉันไว้`}
            </label>
          </div>

          <div className="text-sm">
            <NextLink
              href="/auth/forgot"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              {`ลืมรหัสผ่าน?`}
            </NextLink>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={formState.isSubmitted && !formState.isValid}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                aria-hidden="true"
              />
            </span>
            {`เข้าสู่ระบบ`}
          </button>
        </div>
      </form>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = supbaseServerClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // if (session)
  //   return {
  //     redirect: {
  //       destination: `/`,
  //       permanent: false,
  //     },
  //   };

  // Run queries with RLS on the server
  const { data } = await supabase.from(`users`).select(`*`);

  return {
    props: {
      initialSession: session,
      session,
      data: data ?? [],
    },
  };
};

export default AuthSignInPage;
