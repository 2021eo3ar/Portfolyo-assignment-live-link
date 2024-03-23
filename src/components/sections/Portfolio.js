import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { useUserData } from "@/pages/api/hello";

const Portfolio = () => {
  const userData = useUserData();
  const projects = userData?.user?.projects || [];
  const swiperRef = useRef(null);

  // Sort projects according to sequence
  projects.sort((a, b) => a.sequence - b.sequence);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      <div className="custom-title">
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
      </div>

      <Swiper
        ref={swiperRef}
        {...salimovSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {projects.map((project, index) => (
          project.enabled && (
            <SwiperSlide key={index} className="single-item swiper-slide">
              <div className="main-content">
                <img
                  className="img-fluid"
                  src={project.image.url || 'Loading...'}
                  alt="Image Project"
                />
              </div>

              <div className="details">
                <h4>{project.title || 'Loading...'}</h4>
                <div>
                  <ul>
                    <li>
                      <span>
                        <i className="fa-brands fa-github"></i> GitHub:
                      </span>
                      <span>
                        <a href={project.githuburl || '#'} alt="loading">
                          click here
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-link"></i> liveUrl:
                      </span>
                      <span>
                        <a href={project.liveurl || '#'} alt="loading">
                          click here
                        </a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-layer-group"></i> TechStack:
                      </span>
                      <span>{project.techStack.join(", ") || 'Loading...'}</span>
                    </li>
                    {/* No longer needed */}
                    {/* <li>
                      <span>
                        <i className="fa-solid fa-code-branch" /> Frameworks :
                      </span>
                      <span>WordPress</span>
                    </li> */}
                  </ul>
                </div>
                <a
                  href={project.githuburl || '#'}
                  target="_blank"
                  className="custom-btn"
                >
                  <span>
                    preview <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </a>
              </div>
            </SwiperSlide>
          )
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="nav-item next-item animated-btn" onClick={slideNext}>
        <span />
      </div>
      <div className="nav-item prev-item animated-btn" onClick={slidePrev}>
        <span />
      </div>

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};

export default Portfolio;
