import React from "react";
import Review from "./testiomyDb";

function ReviewSection() {
  const img = Review.img;
  const name = Review.name;
  const message = Review.message;
  return (
    <section className="section-testimonals services">
      <div className="row">
        <h2 className="testimonial-h2">Our customers can't live without us</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-3">
          <cite>
            <img src={img} alt="Alberto Duncan" />
            <p>{name}</p>
          </cite>
          <blockquote>{message}</blockquote>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
