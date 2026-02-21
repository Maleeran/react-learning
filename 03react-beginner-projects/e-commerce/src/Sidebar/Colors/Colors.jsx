import Input from "../../components/Input";
import "./Colors.css";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test3" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Black"
          title="Black"
          name="test3"
          color="Black"
        />
        <Input
          handleChange={handleChange}
          value="Blue"
          title="Blue"
          name="test3"
          color="Blue"
        />
        <Input
          handleChange={handleChange}
          value="Red"
          title="Red"
          name="test3"
          color="Red"
        />
        <Input
          handleChange={handleChange}
          value="Green"
          title="Green"
          name="test3"
          color="Green"
        />
        <Input
          handleChange={handleChange}
          value="Gray"
          title="Gray"
          name="test3"
          color="Gray"
        />
        {/* <Input
          handleChange={handleChange}
          value="White"
          title="White"
          name="test3"
          color="none"
        /> */}
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  );
};
export default Colors;
