import * as styles from "./search.module.css";

import { MdSearch } from "react-icons/md";
export function SearchBar() {
  return (
    <>
      <form className={styles.search}>
        <div className={styles.inputGroup}>
          <MdSearch className={styles.searchIcon} />
          <input
            className={styles.searchBar}
            type="text"
            name="search"
            id="search"
            placeholder="full name"
          ></input>
        </div>
      </form>
    </>
  );
}
