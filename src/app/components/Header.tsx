import Link from 'next/link';

const Header: React.FC = () => (
    <div>
        <Link href="/">
            <a style={{ marginRight: 15 }}>Home</a>
        </Link>
        <Link href="/about">
            <a style={{ marginRight: 15 }}>About</a>
        </Link>
    </div>
);

export default Header;
