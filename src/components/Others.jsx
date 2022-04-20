import classes from "./Interests.module.css";
const Others = (props) => {
  return (
    <div className={classes.interests}>
      <h2>Languages, Libraries & Frameworks</h2>
      <ol>
        <li>JavaScript</li>
        <ul>
          <li>
            React: I'm a huge fan of this library developed and maintained by
            Meta (Facebook)
          </li>
        </ul>
        <li>Python</li>
        <ul>
          <li>Flask: I learnt a bit of this microweb framework</li>
          <li>Tkinter</li>
          <li>Numpy</li>
          <li>Scikit Learn: Really grateful for this library</li>
          <li>
            TensorFlow: My go to library for neural network and deep learning
          </li>
        </ul>
      </ol>
      <p>
        Most of my codes are present in my
        <a href="https://github.com/Farhan-Uz-Zaman">
          <b>Github repositories</b>
        </a>
      </p>
      <h2>Hobbies</h2>
      <ul>
        <li>Writing Poetry</li>
        <li>Travelling</li>
        <li>Watching Movies and Series</li>
      </ul>
    </div>
  );
};
export default Others;
