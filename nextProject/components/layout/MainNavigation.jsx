import classes from "./MainNavigation.module.css";
// import { Link } from "next/link",.
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="/">All Meetups</a>
          </li>
          <li>
            <a href="/new-meetup">Add New Meetup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
