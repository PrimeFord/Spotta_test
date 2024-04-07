import { useState } from "react";

const Ratings = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex">
      {[...Array(5)].map((star, index) => {
        const currentRating: any = index + 1;
        return (
          <label key={index + star}>
            <input
              type="radio"
              name="rating"
              className=" hidden"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                fontSize: 24,
                color: currentRating <= hover || rating ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default Ratings;
