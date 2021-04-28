import './Footer.css';
import {FacebookShareButton, FacebookIcon} from "react-share";
import { LinkedinShareButton,LinkedinIcon} from "react-share";
import {TwitterShareButton, TwitterIcon } from "react-share";
import {InstapaperShareButton,InstapaperIcon } from "react-share";

const Footer = () => {

    const myStyle = {
    backgroundColor: "white",
    }

    return(
        <div>
        <section class="py-5 bg-voilet text-white">
        <div class="container">
        <div class="half-circle">
        <div class="row">
            <div class="col-md-3">
                <h3>
                <img src="https://goyello.com/img/Aspire.png" />
                <b>ACIA</b>
                </h3>
                <p class="description">ACIA is a complete insurance product solution that is pre packaged</p> 
            </div>

            <div class="col-md-2">
                <h6><b>Learn More</b></h6>
                <ul class="list-unstyled mt-3">
                    <li><a href="#" class="text-white">How it works?</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Pricing</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Media Release</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Sitemap</a></li>
                </ul>
            </div>

            <div class="col-md-2">
                <h6><b>Support</b></h6>
                <ul class="list-unstyled mt-3">
                    <li><a href="#" class="text-white">FAQ</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Contact Us</a></li>
                </ul>
            </div>

            <div class="col-md-2">
                <h6><b>About Us</b></h6>
                <ul class="list-unstyled mt-3">
                    <li><a href="#" class="text-white">About</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Careers</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Terms of Service</a></li>
                    <div class="mb-2"></div>
                    <li><a href="#" class="text-white">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="col-md-2">
                <h6><b>We're in Social</b></h6>
                <ul class="list-unstyled mt-3">
                    <li><a href="#" class="text-white">How it works?</a></li>
                    <div class="mb-2"></div>
                    <FacebookShareButton url="https://www.facebook.com/AspireSystems">
                        <FacebookIcon logoFillColor="white"/>
                    </FacebookShareButton>
                    <LinkedinShareButton url="https://www.facebook.com/AspireSystems">
                        <LinkedinIcon logoFillColor="white"/>
                    </LinkedinShareButton>
                    <TwitterShareButton url="https://www.facebook.com/AspireSystems">
                        <TwitterIcon logoFillColor="white"/>
                    </TwitterShareButton>
                    <InstapaperShareButton url="https://www.facebook.com/AspireSystems">
                        <InstapaperIcon logoFillColor="white"/>
                    </InstapaperShareButton>
                </ul>
            </div>
            <div class="col-md-3">
            <p class="text-white"> US & CAN: 1 - 855 -758-0984</p>
            <p class="text-white"> Worldwide: +1-424-781-3315</p>
            </div>
          </div>
        </div>
    </div>

    <div>
    <hr style={myStyle} />
    <p class="text-white" style={{textAlign:"center"}}>All rights reserved. ACIA 2021</p>
    </div>

  </section>
</div> 

 )
}
export default Footer;