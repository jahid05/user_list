import Search from "./Search/Search";
import SortUsers from "./SortUsers/SortUsers";

const Header = () => {
    return (
        <div >
            <h1 className="pb-12 text-center text-4xl font-semibold">User List</h1>
            <div className="">
            <SortUsers/>
            </div>
        </div>
    );
};

export default Header;