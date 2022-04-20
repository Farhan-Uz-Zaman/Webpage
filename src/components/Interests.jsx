import classes from "./Interests.module.css";
const Interests = (props) => {
  return (
    <div className={classes.interests} id="Interests">
      <h2>Research Interests</h2>
      <p>
        I am interested in applied Machine Learning and Deep Learning that'll
        help us overcome real world concerns, especially in the field of health,
        such as medical imaing and efficient detection of diseases such as
        cancer.
      </p>
    </div>
  );
};
export default Interests;
