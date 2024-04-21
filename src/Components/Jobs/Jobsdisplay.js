import { Link } from 'react-router-dom';
import jobsdisplay from './Jobsdisplay.module.css';

const Jobsdisplay = (props) => {
  return (
    <div className={jobsdisplay.cont}>
      <ul className={jobsdisplay.lists}>
        <li>Title: {props.name}</li>
        <li>Description: {props.description}</li>
        <li>Location: {props.location}</li>
        <li>Salary: {props.salary}</li>
        <Link to='/reg'>
          <button className={jobsdisplay.btn}>Bid</button>
        </Link>
      </ul>
    </div>
  );
};

export default Jobsdisplay;
