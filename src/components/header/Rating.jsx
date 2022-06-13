import "./Rating.css";
import { FaBeer } from "react-icons/fa";

const filterButton = [1, 2, 3, 4, 5];
function StartList({ filterRating, fillStar }) {
  return (
    <ul className="starsList">
      {filterButton.map((star) => {
        return (
          <li
            key={star}
            onClick={() => {
              filterRating(star);
            }}
          >
            <FaBeer className={star <= fillStar && "fillColor"} />
          </li>
        );
      })}
    </ul>
  );
}

export default StartList;
