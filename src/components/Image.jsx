import FarhanUzZaman from "../assets/FarhanUzZaman.jpg";
import classes from "./Image.module.css";

function Image() {
  return (
    <div className={classes["main-img"]}>
      <img src={FarhanUzZaman} alt="photo" />
    </div>
  );
}
export default Image;
