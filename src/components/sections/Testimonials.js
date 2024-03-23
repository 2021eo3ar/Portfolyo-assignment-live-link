import { useUserData } from "@/pages/api/hello";

const Testimonials = () => {
  const userData = useUserData();
  
  // Filter enabled testimonials
  const testimonials = userData?.user?.testimonials.filter(testimonial => testimonial.enabled) || [];
  
  
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIALS START */}
        {testimonials.map(testimonial => (
          <div key={testimonial._id} className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
            <div>
              <p>
                <span className="quote">{testimonial.review}</span>
                <span className="person">{testimonial.name}</span>
                <span className="job">{testimonial.position}</span>
              </p>
              <img src={testimonial.image.url} alt={testimonial.name} />
            </div>
          </div>
        ))}
        {/* TESTIMONIALS END */}
      </div>
      {/* Separator */}
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};

export default Testimonials;
