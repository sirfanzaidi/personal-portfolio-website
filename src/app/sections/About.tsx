import React from "react";
import "./about.css";
import SectionTitle from "../components/SectionTitle";
import profileImg from "../../../public/assets/images/profile-img.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <SectionTitle
          title="about"
          brief="I am Syed Irfan Hussain Zaidi, a seasoned Vizrt Operator and Graphic Designer with over 20 years in media and design, based in Karachi, Pakistan. I specialize in creating high-quality graphics for live TV, with expertise in Adobe Photoshop, Corel Draw, and Final Cut Pro. Currently at Express News, I havve contributed to projects like PSL-JOSH JAGA DAY and  SPOTS PAGE with Mirza Iqbal Baig. My background includes roles in non-linear editing and newspaper layout design, making me a versatile designer with a strong eye for detail and project management skills"
        />
         <div className="row">
        <div className="col-lg-4">
          <Image src={profileImg} className="img-fluid" alt="pfofile image" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content ">
          <h3>UI/UX Designer &amp; Full Stack Web Developer. </h3>
          <p className="fst-italic">
            loren ipsum dolor sit amet, loren ipsum dolor sit amet, loren ipsum
            dolor sit amet, loren ipsum dolor sit amet,
          </p>
          <div className="row">
            <div className="col-lg-6">

              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  {""}
                  <strong>Birthday:</strong> <span>1 May 1995</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  {""}
                  <strong>Website:</strong> <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  {""}
                  <strong>Phone:</strong> <span>+123 456 7890</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  {""}
                  <strong>City:</strong> <span>Your City, State</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
            <ul>
<li>
<i className="bi bi-chevron-right"></i>{''}
<strong>Age:</strong> <span>29</span> 
</li>
<li>
<i className="bi bi-chevron-right"></i>{''}
<strong>Degree:</strong> <span>Master</span>
</li>
<li>
<i className="bi bi-chevron-right"></i>{''}
<strong>PhEmailone:</strong> <span>email@example.com</span>
</li>
<li>
<i className="bi bi-chevron-right"></i>{''}
<strong>Freelance:</strong> <span>Available</span>
</li>
</ul>
</div>
          </div> 
          <p>
            ovviciis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            ovviciis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            ovviciis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
          </p>
          </div>
        </div>
      </div>
     
      
    </section>
  );
}
