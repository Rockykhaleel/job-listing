import React from "react";
import "./All.css";

const MainPage = () => {
  return (
    <>
      <section className="ls-section">
        <div className="auto-container">
          <div className="filters-backdrop"></div>

          <div className="row">
            <div className="filters-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="filters-outer">
                  <button type="button" className="theme-btn close-filters">
                    X
                  </button>

                  <div className="filter-block">
                    <h4>Search by Keywords</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="listing-search"
                        placeholder="Job title, keywords, or company"
                      />
                      <span className="icon flaticon-search-3"></span>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Location</h4>
                    <div className="form-group">
                      <input
                        type="text"
                        name="listing-search"
                        placeholder="City or postcode"
                      />
                      <span className="icon flaticon-map-locator"></span>
                    </div>
                    <p>Radius around selected destination</p>
                    <div className="range-slider-one">
                      <div className="area-range-slider"></div>
                      <div className="input-outer">
                        <div className="amount-outer">
                          <span className="area-amount"></span>km
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Category</h4>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option>Choose a category</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Industrial</option>
                        <option>Apartments</option>
                      </select>
                      <span className="icon flaticon-briefcase"></span>
                    </div>
                  </div>

                  <div className="switchbox-outer">
                    <h4>Job type</h4>
                    <ul className="switchbox">
                      <li>
                        <label className="switch">
                          <input type="checkbox" checked />
                          <span className="slider round"></span>
                          <span className="title">Freelance</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Full Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Internship</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Part Time</span>
                        </label>
                      </li>
                      <li>
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                          <span className="title">Temporary</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div className="checkbox-outer">
                    <h4>Date Posted</h4>
                    <ul className="checkboxes">
                      <li>
                        <input id="check-f" type="checkbox" name="check" />
                        <label for="check-f">All</label>
                      </li>
                      <li>
                        <input id="check-a" type="checkbox" name="check" />
                        <label for="check-a">Last Hour</label>
                      </li>
                      <li>
                        <input id="check-b" type="checkbox" name="check" />
                        <label for="check-b">Last 24 Hours</label>
                      </li>
                      <li>
                        <input id="check-c" type="checkbox" name="check" />
                        <label for="check-c">Last 7 Days</label>
                      </li>
                      <li>
                        <input id="check-d" type="checkbox" name="check" />
                        <label for="check-d">Last 14 Days</label>
                      </li>
                      <li>
                        <input id="check-e" type="checkbox" name="check" />
                        <label for="check-e">Last 30 Days</label>
                      </li>
                    </ul>
                  </div>

                  <div className="checkbox-outer">
                    <h4>Experience Level</h4>
                    <ul className="checkboxes square">
                      <li>
                        <input id="check-ba" type="checkbox" name="check" />
                        <label for="check-ba">All</label>
                      </li>
                      <li>
                        <input id="check-bb" type="checkbox" name="check" />
                        <label for="check-bb">Internship</label>
                      </li>
                      <li>
                        <input id="check-bc" type="checkbox" name="check" />
                        <label for="check-bc">Entry level</label>
                      </li>
                      <li>
                        <input id="check-bd" type="checkbox" name="check" />
                        <label for="check-bd">Associate</label>
                      </li>
                      <li>
                        <input id="check-be" type="checkbox" name="check" />
                        <label for="check-be">Mid-Senior level4</label>
                      </li>
                      <li>
                        <button className="view-more">
                          <span className="icon flaticon-plus"></span> View More
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="filter-block">
                    <h4>Salary</h4>

                    <div className="range-slider-one salary-range">
                      <div className="salary-range-slider"></div>
                      <div className="input-outer">
                        <div className="amount-outer">
                          <span className="amount salary-amount">
                            $<span className="min">0</span>$
                            <span className="max">0</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="filter-block">
                    <h4>Tags</h4>
                    <ul className="tags-style-one">
                      <li>
                        <a href="#">app</a>
                      </li>
                      <li>
                        <a href="#">administrative</a>
                      </li>
                      <li>
                        <a href="#">android</a>
                      </li>
                      <li>
                        <a href="#">wordpress</a>
                      </li>
                      <li>
                        <a href="#">design</a>
                      </li>
                      <li>
                        <a href="#">react</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="call-to-action-four">
                  <h5>Recruiting?</h5>
                  <p>
                    Advertise your jobs to millions of monthly users and search
                    15.8 million CVs in our database.
                  </p>
                  <a href="#" className="theme-btn btn-style-one bg-blue">
                    <span className="btn-title">Start Recruiting Now</span>
                  </a>
                  <div
                    className="image"
                    style={{
                      backgroundImage: "url(images/resource/ads-bg-4.png)",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="ls-outer">
                <button
                  type="button"
                  className="theme-btn btn-style-two toggle-filters"
                >
                  Show Filters
                </button>

                <div className="ls-switcher">
                  <div className="showing-result">
                    <div className="text">
                      Showing <strong>41-60</strong> of <strong>944</strong>{" "}
                      jobs
                    </div>
                  </div>
                  <div className="sort-by">
                    <select className="chosen-select">
                      <option>New Jobs</option>
                      <option>Freelance</option>
                      <option>Full Time</option>
                      <option>Internship</option>
                      <option>Part Time</option>
                      <option>Temporary</option>
                    </select>

                    <select className="chosen-select">
                      <option>Show 10</option>
                      <option>Show 20</option>
                      <option>Show 30</option>
                      <option>Show 40</option>
                      <option>Show 50</option>
                      <option>Show 60</option>
                    </select>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-1.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Software Engineer (Android), Libraries</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-2.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Recruiting Coordinator</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-3.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Product Manager, Studio</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-4.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Senior Product Designer</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-5.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">
                          Senior Full Stack Engineer, Creator Success
                        </a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-6.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Software Engineer (Android), Libraries</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-7.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Software Engineer (Android), Libraries</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-8.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Recruiting Coordinator</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-9.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Product Manager, Studio</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="job-block">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          src="images/resource/company-logo/1-1.png"
                          alt=""
                        />
                      </span>
                      <h4>
                        <a href="#">Senior Product Designer</a>
                      </h4>
                      <ul className="job-info">
                        <li>
                          <span className="icon flaticon-briefcase"></span>{" "}
                          Segment
                        </li>
                        <li>
                          <span className="icon flaticon-map-locator"></span>{" "}
                          London, UK
                        </li>
                        <li>
                          <span className="icon flaticon-clock-3"></span> 11
                          hours ago
                        </li>
                        <li>
                          <span className="icon flaticon-money"></span> $35k -
                          $45k
                        </li>
                      </ul>
                      <ul className="job-other-info">
                        <li className="time">Full Time</li>
                        <li className="privacy">Private</li>
                        <li className="required">Urgent</li>
                      </ul>
                      <button className="bookmark-btn">
                        <span className="flaticon-bookmark"></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ls-show-more">
                  <p>Showing 36 of 497 Jobs</p>
                  <div className="bar">
                    <span className="bar-inner" style={{ width: "40%" }}></span>
                  </div>
                  <button className="show-more">Show More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
