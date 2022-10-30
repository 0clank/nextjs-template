import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Head } from 'next/document';
import { Fragment } from 'react';

export default function App({ Component, pageProps }: AppProps) {

    const [isAppReady, setIsAppReady] = useState(false);
    const { isReady } = useRouter();

    useEffect(() => {
        setIsAppReady(true);
    }, []);

    if (isReady && isAppReady) {
        return (
            <Fragment>
                <Component {...pageProps} />
            </Fragment>
        );
    } else {
        return null;
    }

}
