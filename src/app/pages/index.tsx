import { NextFC } from 'next';
import Layout from 'components/Layout';
import Debug from 'containers/debug';

const Index: NextFC = () => (
    <Layout>
        <h1>Debug</h1>
        <Debug />
    </Layout>
);

export default Index;