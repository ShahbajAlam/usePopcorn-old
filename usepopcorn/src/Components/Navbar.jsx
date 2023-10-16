import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ children, setQuery }) => {
    return (
        <nav className="nav-bar">
            <Logo />
            <Search setQuery={setQuery} />
            {children}
        </nav>
    );
};

export default Navbar;
