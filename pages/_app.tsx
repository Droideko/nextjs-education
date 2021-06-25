import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from '../styles/globalStyle';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
      <p>test</p>
    </>
  );
};

export default MyApp;
