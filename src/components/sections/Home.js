import { useUserData } from "@/pages/api/hello";
const Home = () => { 
  const userData = useUserData (); 
  return (
    <section className="home image" id="home">
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Hello<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">I am</span>
              <span className="intro animated-layer">
              {userData && userData.user && userData.user.about ? userData.user.about.subTitle : 'Loading...'}
              </span>
            </span>
            <span>
              <span className="animated-layer">{userData && userData.user && userData.user.about ? userData.user.about.name : 'Loading...'}</span>
            </span>
          </h1>
        </div>
        {/* Additional details can be displayed similarly */}
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );  
};
export default Home;
