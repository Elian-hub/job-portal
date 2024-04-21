import home from "./Home.module.css";
import { Link } from "react-router-dom";
import logo from "../../image/logoJP.jpg";

export function Home() {
  return (
    <div className={home.page}>
      <div className={home.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <p className={home.logoname}>Job Portal</p>

      <nav>
        <div className={home.navbar}>
          <Link to="/jobs" className={home.txtdeco}>
            <p className={home.nav1}>Jobs</p>
          </Link>
          <Link to="/admin" className={home.txtdeco}>
            <p className={home.nav1}>Adminstrator</p>
          </Link>
        </div>
      </nav>
      <p className={home.txt}>Find a perfect job for you!</p>
    </div>
  );
}
export default Home;
