import React from "react";
import Ratings from "../testiomyDb";

export default function Testimonies() {
  const myRating = Ratings.map((review) => {
    return (
      <div className="col span-1-of-3" key={review.id}>
        <cite>
          <img src={review.img} alt="Alberto Duncan" />
          <p>{review.name}</p>
        </cite>
        <blockquote>{review.message}</blockquote>
      </div>
    );
  });
  return (
    <section className="section-testimonals services ">
      <div className="row">
        <h2 className="testimonial-h2">Our customers can't live without us</h2>
      </div>
      <div className="services-center">
        <div className="row">{myRating}</div>
      </div>
    </section>
  );
}
