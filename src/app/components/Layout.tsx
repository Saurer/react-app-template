import Header from './Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: 'solid 1px #ddd'
};

const Layout: React.FC = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;
