import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <button className={css.btn}>
        <Link to="/">Go Home</Link>
      </button>

      <p className={css.p}>Anything Is Not Found</p>
    </>
  );
}
