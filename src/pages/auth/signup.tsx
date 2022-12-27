import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

import supabase from '@/libs/supabase';

import type { NextPageWithLayout } from '../_app';

const AuthSignUpPage: NextPageWithLayout = () => {
  // const captchaRef = useRef<HCaptcha>(null);

  return (
    <>
      <div>
        <Auth
          redirectTo="/"
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[`google`]}
        />
      </div>
    </>
  );
};

export default AuthSignUpPage;
