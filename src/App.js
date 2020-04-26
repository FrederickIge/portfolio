import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideNav from './SideNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">



<div id="___gatsby">
        <div style={{outline: 'none'}} tabIndex={-1} role="group">
          <main>
            <div className="d-md-flex border-md-bottom">
              <SideNav/>
              <div className="col-md-7 col-lg-8 col-xl-9 px-4 py-6 px-lg-7 border-top border-md-top-0" style={{backgroundColor: '#fafbfc'}}>
                
              <h2 className="text-center">Certifications and Clearance</h2>
<br></br>
<p className="text-center f3"> ServiceNow Certified System Administrator</p>
<p className="text-center f3">Public Trust Clearance</p>
                <div className="mx-auto" style={{maxWidth: '900px'}}>


                  <h2 className="text-center">Projects</h2>
                  <p className="f4 mb-4 text-gray text-center">Links to projects and repository code avaliable </p>
                  
                  <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="github-component height-full text-left border border-gray-light bg-white rounded-1 p-3">
                        <div className=" mb-1">
                          <h3 className=" lh-condensed mb-1">
                            <a target="_blank" href="https://react-fire-9a99e.firebaseapp.com">Delish-us</a>
                            <br></br>
                            
                          </h3>

                          <div style ={{minHeight:"200px"}}>
                            <img src={require('./delish.jpg')} style={{ width:"100%", height:"200px"}} alt="..." className={"rounded"}></img>
                          </div>

                        </div>

                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className>A Yelp clone where users can search for restaurants using Google Maps and share their favorite places with friends.</span></div>
                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className><b>Technologies used:</b> React, Mobx, Firestore, Google Maps API, Bootstrap 4</span></div>

                        <div className="d-flex justify-content-around f6">
                        <a  target="_blank" href="https://github.com/FrederickIge/Delish-Us"><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                        <a  target="_blank" href="https://react-fire-9a99e.firebaseapp.com"><FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="github-component height-full text-left border border-gray-light bg-white rounded-1 p-3">
                        <div className=" mb-1">
                          <h3 className=" lh-condensed mb-1">
                            <a target="_blank" href="https://university-of-life.firebaseapp.com">University of Life</a>
                            <br></br>
                            
                          </h3>
                          <div style ={{minHeight:"200px"}}>
                          <img src={require('./university.JPG')} style={{ width:"100%", height:"200px"}} alt="..." className={"rounded"}></img>
                          </div>
                        </div>

                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className>Financial discovery tool that allows the user to compare the return on investment of various college and degree choices. </span></div>
                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className><b>Technologies used:</b> React, Mobx, graphQL, Node, AdonisJS, Apollo Client, Postgres, Bootstrap 4</span></div>

                        <div className="d-flex justify-content-around f6">
                        <a  target="_blank" href="https://github.com/FrederickIge/university-of-life-core"><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                        <a  target="_blank" href="https://university-of-life.firebaseapp.com/"><FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="github-component height-full text-left border border-gray-light bg-white rounded-1 p-3">
                        <div className=" mb-1">
                          <h3 className=" lh-condensed mb-1">
                            <a target="_blank" href="https://frederickige.github.io/bitclaims-landing-page/#/">BitClaims</a>
                            <br></br>
                            
                          </h3>
                          <div style ={{minHeight:"200px"}}>
                          <img src={require('./bitclaims.JPG')} style={{ width:"100%", height:"200px"}} alt="..." className={"rounded"}></img>

                          </div>
                        </div>

                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className>A Landing page built for medical claims crypto start-up, BitClaims. (BitClaims is no longer operational).</span></div>
                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span className><b>Technologies used:</b> AngularJS</span></div>

                        <div className="d-flex justify-content-around f6">
                        <a  target="_blank" href="https://github.com/FrederickIge/bitclaims-landing-page"><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                        <a  target="_blank" href="https://frederickige.github.io/bitclaims-landing-page/#/"><FontAwesomeIcon icon={faExternalLinkAlt} className="fa-2x" /></a>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="github-component height-full text-left border border-gray-light bg-white rounded-1 p-3">
                        <div className=" mb-1">
                          <h3 className=" lh-condensed mb-1">
                            <a target="_blank" href="https://github.com/FrederickIge/instagram-web-scraper">Instagram Scraper</a>
                            <br></br>
                            
                          </h3>
                          <div style ={{minHeight:"200px"}}>
                          <img src={require('./insta.jpg')} style={{ width:"100%", height:"200px"}} alt="..." className={"rounded"}></img>

                          </div>
                        </div>

                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span>A node script that runs headless chrome to scrape Instagram.com, given a hashtag string. </span></div>
                        <div style={{minHeight:"100px"}} className="text-gray mb-2 ws-normal"><span><b>Technologies used:</b> Node, Puppeter, MongoDB</span></div>

                        <div className="d-flex justify-content-around f6">
                        <a  target="_blank" href="https://github.com/FrederickIge/instagram-web-scraper"><FontAwesomeIcon icon={faGithub} className="fa-2x" /></a>
                        </div>
                      </div>
                    </div>






                  </div>
                  <h2 className="text-center">Technologies</h2>
                  <p className="f4 mb-4 text-gray text-center">Projects built in:</p>
                  <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span  className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                        <img src={require('./react.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">React</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./node.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Node/Express</p>
                      </span>
                    </div>

                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./pg.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Postgres</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span  className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                        <div className="row">
                        <img src={require('./redux.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                      <img src={require('./mobx.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        </div>


                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">State Management: Redux and Mobx</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span href="https://github.com/topics/css" className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                        <img src={require('./graphql.png')} width={200} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">graphQL</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span  className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./firebase.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Firebase</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span  className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./angular.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">AngularJS/Angular</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./google-maps.png')} width={64} height={64} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Google Maps API</p>
                      </span>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <span className="github-component position-relative hover-grow height-full no-underline d-flex flex-column flex-justify-center text-center border border-gray-light rounded-1 bg-white p-5">
                      <img src={require('./java.png')} width={100} height={100} className="mx-auto rounded-1 mb-3" alt="CSS" />
                        <p className="f3 lh-condensed text-center link-gray-dark mb-0 mt-1">Java</p>
                      </span>
                    </div>
                  </div>
                  <h2 className="text-center">Blog Posts</h2>

                  * Coming Soon *
                  {/* <p className="f4 mb-4 text-gray">Articles I've written can be found on Medium or Dev.to</p>
                  <div className="d-sm-flex flex-wrap gutter-condensed mb-4">
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="height-full text-left border border - gray - light bg-white rounded-1 p-3">
                        <div className="d-flex flex-justify-between flex-items-start mb-1">
                        <img src={require('./medium.png')} className="img-fluid mx-auto rounded-1 mb-3" alt="CSS" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-12 col-lg-6 col-xl-4 mb-3">
                      <div className="height-full text-left border border - gray - light bg-white rounded-1 p-3">
                        <div className="d-flex flex-justify-between flex-items-start mb-1">
                        <img src={require('./dev.png')} className="img-fluid mx-auto rounded-1 mb-3" alt="CSS" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>



    </div>
  );
}

export default App;
