import classes from "./Interests.module.css";
const Publication = (props) => {
  return (
    <div className={classes.interests} id="Publication">
      <h2>Publications</h2>

      <ol>
        <li>
          <a href="https://ieeexplore.ieee.org/document/9718373/">
            Multi-modal Emotion Recognition for Determining Employee
            Satisfaction
          </a>
        </li>
        <li>
          <a href="https://www.researchgate.net/publication/354849648_Prediction_of_Vaccination_Side-Effects_using_Deep_Learning">
            Prediction of Vaccination Side-Effects using Deep Learning{" "}
          </a>
        </li>
        <p>
          Feel free to visit my page on
          <a href="https://www.researchgate.net/profile/Farhan-Zaman-3">
            <b>Researchgate</b>
          </a>
        </p>
      </ol>
    </div>
  );
};
export default Publication;
