import { Link } from "react-router-dom";
import { useRef } from "react";

import s from "./NotFound.module.css";

const NotFound = () => {
  const stateRef = useRef(location.state);
  const linkGoBack = stateRef.current ?? "/";

  return (
    <div className={s.wrapper}>
      <img
        src="https://cdn.pixabay.com/photo/2021/07/21/12/49/error-6482984_960_720.png"
        width={1000}
      />
      <div className={s.box}>
        <div className={s.text}>Not Found</div>
        <Link to={linkGoBack} className={s.link_back}>
          Go back
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
