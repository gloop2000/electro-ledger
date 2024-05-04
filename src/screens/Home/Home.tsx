import React from "react";
import "./Home.css";
import YearAndMonthPicker from "../../components/YearAndMonthPicker/YearAndMonthPicker";

const Home: React.FC = () => {
  return (
    <div className="year-picker">
      <YearAndMonthPicker />
    </div>
  );
};

export default Home;
