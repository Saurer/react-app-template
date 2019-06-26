import { Provider } from 'react-redux';
import NextApp, { Container, NextAppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';
import configureStore from 'modules/store';
import { Store } from 'redux';

export interface IAppProps {
    store: Store;
}

class App extends NextApp<IAppProps> {
    static async getInitialProps({ Component, ctx }: NextAppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {
            pageProps
        };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(App);