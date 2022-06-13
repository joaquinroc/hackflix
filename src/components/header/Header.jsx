import { Link } from "react-router-dom";
//import Movies from "../main/Movies";
//import MovieData from "../main/About";
//import Movies from "../main/Movies";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import "./Header.css";

function Header() {
  return (
    <div className="container header">
      <h3>HackFlix</h3>
      <ul className="header-ul">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
      </ul>

      <>
        <ButtonGroup>
          <DropdownButton
            as={ButtonGroup}
            title="Search By"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">
              <Link to="/rating">Search by Rating</Link>
            </Dropdown.Item>
            {/*<Link>
              <Dropdown.Item eventKey="2">Search by Name</Dropdown.Item>{" "}
            </Link>*/}
          </DropdownButton>
        </ButtonGroup>
      </>
    </div>
  );
}

export default Header;
