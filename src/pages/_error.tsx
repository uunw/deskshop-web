import type { NextPage } from 'next';

interface IProps {
  statusCode: number | undefined;
}

const ErrorPage: NextPage<IProps> = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : `An error occurred on client`}
    </p>
  );
};

ErrorPage.getInitialProps = ({ err }) => {
  // const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  if (err) {
    return { statusCode: err.statusCode };
  }

  return { statusCode: undefined };
};

export default ErrorPage;
