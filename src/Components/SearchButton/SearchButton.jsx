import styles from '../Navbar/Navbar.module.css';
import { IoIosSearch } from "react-icons/io";

const SearchButton = ({searchBar,setSearchBar}) => {
  return <>
    <li 
    className={`${styles.iconCircle} d-none d-lg-flex ${searchBar && 'border-danger text-danger'}`}
     onClick={() => setSearchBar(true)}>
        <IoIosSearch size={24}  />
    </li>
  </>
}

export default SearchButton