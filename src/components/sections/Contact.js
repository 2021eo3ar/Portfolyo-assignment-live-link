import { useUserData } from "@/pages/api/hello";
import React from 'react';

const Contact = () => {
  const userData = useUserData();

  // CSS styles
  const styles = `
    .social-item {
      display: inline-block;
      margin-right: 10px; /* Adjust margin as needed */
    }

    .social-item a {
      display: block;
    }

    .social-item img {
      width: 30px; /* Adjust size as needed */
      height: 30px; /* Adjust size as needed */
    }
  `;

  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              {userData?.user?.about?.phoneNumber ?? 'Loading...'}
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              {userData?.user?.about?.address ?? 'Loading...'}
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              {userData?.user?.email ?? 'Loading...'}
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li className="social-item">
                <a href={userData?.user?.social_handles[0]?.url ?? 'Loading...'} >
                  <img src={userData?.user?.social_handles[0]?.image.url ?? 'Loading...'} alt="" />
                </a>
              </li>
              <li className="social-item">
                <a href={userData?.user?.social_handles[1]?.url ?? 'Loading...'} >
                <img src={userData?.user?.social_handles[1]?.image.url ?? 'Loading...'} alt="" />
                </a>
              </li>
              <li className="social-item">  
                <a href={userData?.user?.social_handles[2]?.url ?? 'Loading...'} >
                <img src={userData?.user?.social_handles[2]?.image.url ?? 'Loading...'} alt="" />
                </a>
              </li>
              <li className="social-item">
                <a href={userData?.user?.social_handles[3]?.url ?? 'Loading...'} >
                <img src={userData?.user?.social_handles[3]?.image.url ?? 'Loading...'} alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />

      {/* Apply the CSS styles */}
      <style>{styles}</style>
    </section>
  );
};

export default Contact;
