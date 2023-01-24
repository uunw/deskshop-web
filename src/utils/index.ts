import axios from 'axios';

import { ProductType } from '@/interfaces/Product';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(` `);
}

function getProductType(type: ProductType) {
  switch (type) {
    case ProductType.DESK:
      return `โต๊ะทำงาน`;

    case ProductType.TABLE:
      return `โต๊ะ`;

    default:
      return `ไม่ทราบ`;
  }
}

function parseBearerToken(token: string | undefined): string | undefined {
  if (!token) return undefined;

  // Find the Bearer token in the Authorization header.
  const found = token.match(`/^Bearers+([A-Za-z0-9-._~+/]+)=*$/`);

  // Return Bearer token.
  return found ? found[1] : undefined;
}

function signIn() {
  window.open(
    process.env.NODE_ENV !== `production`
      ? `http://localhost:3000/auth/signin`
      : window.location.hostname,
    `mozillaWindow`,
    // eslint-disable-next-line no-restricted-globals
    `popup,left=${screen.width / 2 - 250},top=100,width=500,height=600`,
  );
}

function log(...msg: unknown[]) {
  if (process.env.NODE_ENV !== `production`) {
    // eslint-disable-next-line no-console
    console.log(msg);
  }
}

async function getAvatarUrlFromEamil(email: string): Promise<string> {
  const { data } = await axios.get(`https://api.hashify.net/hash/md5/hex`, {
    data: {
      value: email,
    },
  });

  const avatarUrl = await axios.get(
    `https://en.gravatar.com/${data.Digest}.json`,
  );

  return avatarUrl.data.entry[0].thumbnailUrl as string;
}

export {
  classNames,
  getAvatarUrlFromEamil,
  getProductType,
  log,
  parseBearerToken,
  signIn,
};
