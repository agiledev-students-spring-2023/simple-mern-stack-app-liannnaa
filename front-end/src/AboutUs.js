import {Link} from 'react-router-dom'
import './About_Us.css'
const picture = require("./Lianna.jpg");
/**
 * @param {*} param0
 * @returns
 */
const About_Us = props => {
  return (
    <>
      <h1>About me</h1>
      <p>My name is Lianna Poblete. I am a sophomore studying Computer Science. </p>
      
	<img src={picture} />

    </>
  
  )
}

export default AboutUs