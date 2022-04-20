import { Fragment, useState } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FARHAN UZ ZAMAN</h1>
        <div className={classes.headerlist}>
          <ul>
            <a id="interest" href="#Interests">
              Interests
            </a>
            <a id="publication" href="#Publication">
              Publication
            </a>
            <a id="education" href="#Education">
              Education
            </a>
            <a id="contact" href="#Contact">
              Contact
            </a>
          </ul>
        </div>
        <div className={classes.toggle__menu}>
          <svg
            onClick={() => setShow(!show)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="46"
            fill="currentColor"
            class="bi bi-justify"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        {show ? (
          <div className={classes.sidebar} onClick={() => setShow(!show)}>
            <ul>
              <a id="interest" href="#Interests">
                Interests
              </a>
              <a id="publication" href="#Publication">
                Publication
              </a>
              <a id="education" href="#Education">
                Education
              </a>
              <a id="contact" href="#Contact">
                Contact
              </a>
            </ul>
          </div>
        ) : null}
      </header>
    </Fragment>
  );
};
export default Header;
