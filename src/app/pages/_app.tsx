import NextApp, { Container, AppContext } from 'next/app';
import StoreContext from 'components/StoreContext';
import store from 'stores';

class App extends NextApp {
    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return {
            pageProps
        };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <StoreContext.Provider value={store}>
                    <Component {...pageProps} />
                </StoreContext.Provider>
            </Container>
        );
    }
}

export default App;
