import { useUserData } from "@/pages/api/hello";
const Copyright = () => {
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
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} {userData?.user?.about?.name ?? 'Loading...'}</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span>
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
      {/* Apply the CSS styles */}
      <style>{styles}</style>
    </section>
  );
};
export default Copyright;
