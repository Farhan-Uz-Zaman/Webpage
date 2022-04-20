import classes from "./Interests.module.css";
const Contact = (props) => {
  return (
    <div className={classes.interests} id="Contact">
      <h2>Contact</h2>
      <p>
        Knock me at
        <a href="https://www.linkedin.com/in/farhan-uz-zaman-489a14122/">
          <b>Linkedin</b>
        </a>
        <br />
        or send me an email at <b>farhan.uz.zaman@g.bracu.ac.bd</b>
      </p>
    </div>
  );
};
export default Contact;
