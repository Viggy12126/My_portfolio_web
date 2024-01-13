import React from 'react';
import styles from "./Banner.module.css";
import { getImageUrl } from "../../utils";

const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Vighnesh</h1>
        <p className={styles.description}>
          I am currently pursuing my masters in Computer Science from NC State University. I am  
          looking for SWE internships for summer 2024. If you feel that I am a good fit for your company, kindly contact me.
        </p>
       
       <div className={styles.button}>
       <a href="mailto:vshegde2@ncsu.edu" className={styles.contactBtn}>
          Contact Me
        </a>

        <a href="https://drive.google.com/file/d/1YwyhzmxzSxY8rmK8DO4j-RGDZfctWlPC/view?usp=drive_link" className={styles.contactBtn}>
          Download Resume
        </a>
       </div>

       <div className={styles.profiles}>

        <div>
          <a href='https://github.com//Viggy12126'>
          <img
        src={getImageUrl("profiles/github img.png")}

        className={styles.profileImg}
       
      />
          </a>
      
        </div>
      

  <div>
    <a href="https://leetcode.com/vighnesh2607/">
    <img
        src={getImageUrl("profiles/leetcode img.png")}
        alt="Leetcode image"
        className={styles.profileImg}
      />
    </a>
 
  </div>
<div>

  <a href="https://linkedin.com/in/vighnesh-hegde-474a19205/">
  <img
        src={getImageUrl("profiles/linkedin img.png")}
        alt="Linkedin image"
        className={styles.profileImg}
      />
  </a>
  

</div>
       </div>
      </div>
      {/* <img
        src={getImageUrl("banner/my pic.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section> 
  )
}

export default Banner