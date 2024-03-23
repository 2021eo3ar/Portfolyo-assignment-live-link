import { useUserData } from "@/pages/api/hello";

const About = () => {
  const userData = useUserData();

  // Sort skills array by sequence
  const sortedSkills = userData?.user?.skills
    ? userData.user.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence)
    : [];

  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div className="img-container animated-layer image-animation my-photo-container fadeInUp wow" data-wow-offset={200} id="my-photo">
          <div>
            <div>
              <img className="my-photo" src={userData?.user?.about?.avatar?.url ?? 'Loading...'} alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {userData?.user?.about?.name?.split(" ")[0] ?? 'Loading...'}
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                {userData?.user?.about?.name?.split(" ")[1] ?? 'Loading...'}
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Age :</span>
                    <span>27 Years</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nationality :</span>
                    <span>American</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Freelance :</span>
                    <span>Available</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Languages :</span>
                    <span>English</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Address :</span>
                    <span>{userData?.user?.about?.address ?? 'Loading...'}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Phone :</span>
                    <span>{userData?.user?.about?.phoneNumber ?? 'Loading...'}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>{userData?.user?.email ?? 'Loading...'}</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Skype :</span>
                    <span>John.Doe</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                My Skills
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div className="skills-content">
          {sortedSkills.map(skill => (
            <div key={skill._id} className="animated-layer fade-in-down-animation fadeInLeft wow">
              <div>
                <span>
                  <img src={skill.image.url} alt={skill.name} style={{ width: '50px', height: '50px', borderRadius: '20px', backgroundColor: '#222' }} />
                </span>
                <h4>{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                My Resume
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            {userData?.user?.timeline?.map((item, index) => (
              item.enabled && (
                <li key={item._id}>
                  <div className={`animated-layer fade-in-${index % 2 === 0 ? 'down' : 'up'}-animation fadeInUp wow`}>
                    <div className="experience">
                      <h4>{item.jobTitle}</h4>
                      <p>
                        <i className="fa-regular fa-clock" />
                        <span>{item.startDate.split("T")[0]} to {item.endDate.split("T")[0]}</span>
                      </p>
                      <p>
                        <i className="fa-regular fa-building" />
                        <span>{item.company_name}</span>
                      </p>
                    </div>
                  </div>
                </li>
              )
            ))}
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img alt="" className="separator hide-mobile" src="assets/separator.png" />
    </section>
  );
};

export default About;
