import Buttons from "../components/Buttons";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons handleClick={handleClick} value="" title="All Products" />
          <Buttons handleClick={handleClick} value="Nike" title="Nike" />
          <Buttons handleClick={handleClick} value="Adidas" title="Adidas" />
          <Buttons handleClick={handleClick} value="Puma" title="Puma" />
          <Buttons handleClick={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};
export default Recommended;
