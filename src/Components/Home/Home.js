import home from "./Home.module.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={home.page}>
      <nav>
        <div>
          <p>LOGO</p>
        </div>

        <div>
          <Link to="/admin">
            <p>Admin</p>
          </Link>
          <Link to="/reg">
            <p>Login/Sign Up</p>
          </Link>
        </div>
      </nav>
      <Link to="/application">
        {" "}
        <button className={home.butto}>Apply for a Job</button>{" "}
      </Link>
    </div>
  );
}
export default Home;
