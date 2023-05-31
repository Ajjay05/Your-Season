import React from 'react'
import "./LandingPage.css"
import Header from '../Header/Header'
import logo from "../Assets/Your-season-Final-Logo-v1/logo.png"
import playStoreImage from "../Assets/playstoreImage.png"
import TeamImage from "../Assets/Team.svg"
import outfit from "../Assets/first_circle.png"
import collection from "../Assets/Third_circle.png"
import stylist from "../Assets/Second_circle.png"
import VideoImage from "../Assets/VideoImg.png"
import mainLogo from "../Assets/main_logo.png"

const LandingPage = () => {
    return (
        <section className='landing-page'>
            {/* <div className='container-fluid'> */}
            <div className='row gx-0 '>
                <div className='col-12'>
                    <div className="backGround-room">
                        <div className='image-overLay'>
                            <Header></Header>
                            {/* <img src={RoomImage} className="roomImage"></img> */}
                            <div className='first-text' >
                                <div className='d-flex justify-content-center'>
                                    <button className='editor-choice-text  border-0'>
                                        #1 Editors Choice App of 2023
                                    </button>
                                </div>

                                <div className='collection_text'>Best app To buy & manage<br /> your Collection</div>
                                <div className='below-collection text-default'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor<br /> invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </div>
                                <button className='try-for border-0 px-5 py-2'>Try for free</button>
                            </div>
                        </div>

                    </div>

                    <div className='circle-div ' >
                        <div className=' circle-text d-flex justify-content-center flex-column text-center'>
                            <div className='awesome-features mb-4'>
                                Awesome features
                            </div>
                            <div className='awesome-feature-belowText mb-5'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br />invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </div>
                            <div className='d-flex justify-content-around mb-3'>

                                <div>
                                    <img src={outfit} className="feature_image_size"></img>
                                    <div className='explore-outfits'>Explore Outfits</div>
                                    <div className='explore-outfits-text'>
                                        Lorem ipsum dolor sit amet<br /> consetetur sadipscing <br /> elitr, sed diam

                                    </div>
                                </div>
                                <div>
                                    <img src={collection} className="feature_image_size"></img>
                                    <div className='explore-outfits'>Create Collection</div>
                                    <div className='explore-outfits-text' >
                                        Lorem ipsum dolor sit amet<br /> consetetur sadipscing <br /> elitr, sed diam

                                    </div>
                                </div>
                                <div>
                                    <img src={stylist} className="feature_image_size"></img>
                                    <div className='explore-outfits'>Meet Stylist</div>
                                    <div  className='explore-outfits-text'>
                                        Lorem ipsum dolor sit amet<br /> consetetur sadipscing <br /> elitr, sed diam
                                    </div>
                                </div>

                            </div>
                            <div className='d-flex justify-content-center mt-5'>
                                <button className='col-2 text-center contact-us-btn'>Contact Us</button>
                            </div>

                        </div>
                    </div>

                    <div className='video-div py-4 px-5'>
                        <img src={VideoImage} className="videoImage"></img>
                    </div>


                    <div className='bg-dark p-5'>
                        <div className='why-season '>
                            Why Your Season?
                        </div>

                        <div >
                            <div className='d-flex align-items-center'>
                                <div className="text-default">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                                </div>

                                <div>
                                    <img src={logo}></img>
                                </div>
                            </div>
                            <div>

                                <button>
                                    Download
                                </button>
                            </div>

                        </div>


                    </div>

                    <div className='download-section bg-dark'>
                        <div className='mobile-image'>

                            <div className='text-default' >
                                Download the App Now
                            </div>

                            <div className='text-default'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            </div>
                            <div className='playStoreImage'>
                                <img src={playStoreImage} ></img>
                            </div>

                        </div>
                    </div>
                    <div className='form-div d-flex align-items-center justify-content-center'>
                        <div className='team-image-div'>
                            <img src={TeamImage} className="team-image"></img>
                        </div>

                        <div className='contact-us'>
                            <div>Contact Us!</div>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
                            <div className='d-flex flex-column'>
                                <input></input>
                                <input></input>
                                <textarea></textarea>
                                <button> Send</button>
                            </div>
                        </div>
                    </div>

                    <div className='footer d-flex justify-content-center '>
                        <div className='d-flex justify-content-center flex-column'>
                            <div className='d-flex justify-content-center'>
                                <img src={mainLogo} className="footer-logo"></img>

                            </div>
                            <div className='d-flex justify-content-between'>

                                <span>Account</span>
                                <span>Account</span>
                                <span>Account</span>
                                <span>Account</span>
                                <span>Account</span>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default LandingPage
