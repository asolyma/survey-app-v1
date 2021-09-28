import { useState } from "react";

const SurveyedPoint = ({ list, point }) => {
  const [points] = useState(list);
  return (
    <div className="surveyed__point">
      <span>point Num = {points.indexOf(point) + 1}</span>
      <p>
        {point.lat},{point.long}
      </p>
    </div>
  );
};
export default SurveyedPoint;
