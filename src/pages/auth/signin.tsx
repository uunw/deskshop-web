import { LockClosedIcon } from '@heroicons/react/20/solid';
import { zodResolver } from '@hookform/resolvers/zod';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import type { NextPageWithLayout } from '../_app';

interface IForm {
  email: string;
  password: string;
}

const formSchema = z.object({
  email: z.string().email(`รูปแบบอีเมลไม่ถูกต้อง`),
  password: z.string().min(6),
});

const AuthSignInPage: NextPageWithLayout = () => {
  // const session = useSession();
  // const supabaseClient = useSupabaseClient();

  const { handleSubmit, register, formState } = useForm<IForm>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    document.body.classList.add(`h-full`);
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center bg-black/5 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto rounded-lg shadow"
              src={`${useRouter().basePath}/IDS.png`}
              alt="IKEA-DeskShop"
            />
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
          </div>
          <form
            className="space-y-6 rounded-lg bg-white px-10 py-7 shadow"
            onSubmit={handleSubmit(onSubmit)}
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
                  className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formState.errors.email && (
                  <p className="text-red-600">
                    {formState.errors.email.message}
                  </p>
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
                  className="relative block w-full appearance-none rounded-md border border-gray-400 px-3 py-2 text-gray-900 placeholder:text-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {`ลืมรหัสผ่าน?`}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={formState.isSubmitted && !formState.isValid}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {`เข้าสู่ระบบ`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthSignInPage;
