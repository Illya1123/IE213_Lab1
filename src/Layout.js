import { Outlet, Link } from 'react-router-dom';

const navStyle = {
    backgroundColor: '#333',
    padding: '10px 0',
};

const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
};

const liStyle = {
    display: 'inline',
    marginRight: '20px',
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
};

const hoverStyle = {
    color: '#f8f8f8',
};

const Layout = () => {
    return (
        <>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}>
                        <Link to="/Bai1" style={linkStyle}>
                            Bài 1
                        </Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="/Bai4" style={linkStyle}>
                            Bài 4
                        </Link>
                    </li>
                    <li style={liStyle}>
                        <Link to="/Bai5" style={linkStyle}>
                            Bài 5
                        </Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
