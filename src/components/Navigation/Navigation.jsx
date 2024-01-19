/* eslint-disable jsx-a11y/alt-text */
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
      <img src={require('../images/image.jpeg')}
        style={{height:100,width:100,marginTop:50}}
      />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navigation;
