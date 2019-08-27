import { Provider } from 'react-redux';
import NextApp, { Container, AppContext } from 'next/app';
import withRedux from 'next-redux-wrapper';
import configureStore from 'modules/store';
import { Store } from 'redux';

interface Props {
    store: Store;
}

class App extends NextApp<Props> {
    static async getInitialProps({ Component, ctx }: AppContext) {
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
