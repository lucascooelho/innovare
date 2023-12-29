import React from "react";

import blog1 from '../../assets/blog-1.jpg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';

const Blog = () => {
  return (
    <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle text-center">Nosso blog</p>
        <h2 className="h2 section-title text-center">Últimos blogs e notícias</h2>

        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <img
                  src={blog1}
                  width="1180"
                  height="800"
                  loading="lazy"
                  alt="Cras accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Cras accumsan nulla nec lacus ultricies placerat.
                  </a>
                </h3>

                <p className="card-text">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>

                <a href="#" className="card-link">
                  Mais informações
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <img
                  src={blog2}
                  width="1180"
                  height="800"
                  loading="lazy"
                  alt="Dras accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dras accumsan nulla nec lacus ultricies placerat.
                  </a>
                </h3>

                <p className="card-text">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>

                <a href="#" className="card-link">
                  Mais informações
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="blog-card">
              <figure
                className="card-banner img-holder"
                // style="--width: 1180; --height: 800;"
              >
                <img
                  src={blog3}
                  width="1180"
                  height="800"
                  loading="lazy"
                  alt="Seas accumsan nulla nec lacus ultricies placerat."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Seas accumsan nulla nec lacus ultricies placerat.
                  </a>
                </h3>

                <p className="card-text">
                  Curabitur sagittis libero tincidunt tempor finibus. Mauris at
                  dignissim ligula, nec tristique orci.
                </p>

                <a href="#" className="card-link">
                  Mais informações
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
