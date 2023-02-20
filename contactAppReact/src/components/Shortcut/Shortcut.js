import * as styles from "./shortcut.module.css";
import { MdOutlineHome, MdOutlinePersonAdd } from "react-icons/md";

//if the home icon is clicked then the contacts should be shown

//if the add icon is clicked then the form should be shown.

// may be it a good idea to create component for both or may be just do it
export function Shortcut({ handleAddShortCut, handleHomeShortcut }) {
  return (
    <>
      <div className={styles.shortcut}>
        <button className={styles.invisible_btn} onClick={handleHomeShortcut}>
          <MdOutlineHome />
        </button>
        <button className={styles.invisible_btn} onClick={handleAddShortCut}>
          <MdOutlinePersonAdd />
        </button>
      </div>
    </>
  );
}
