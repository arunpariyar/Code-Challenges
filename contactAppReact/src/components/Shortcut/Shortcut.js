import * as styles from "./shortcut.module.css";
import { MdOutlineHome, MdOutlinePersonAdd } from "react-icons/md";
export function Shortcut() {
  return (
    <>
      <div className={styles.shortcut}>
        <span>
          <MdOutlineHome />
        </span>
        <span>
          <MdOutlinePersonAdd />
        </span>
      </div>
    </>
  );
}
