import { AppProps } from 'next/app';
import StoreContext from 'components/StoreContext';
import store from 'stores';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <StoreContext.Provider value={store}>
        <Component {...pageProps} />
    </StoreContext.Provider>
);

export default App;
