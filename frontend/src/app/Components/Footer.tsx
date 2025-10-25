import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="footer_wrapper flex items-center justify-center ">
      <div className="container  max-w-6xl  ">
        <div className="footer_logo_list">
          <a href="https://neogreens.com">
            <div className="bg-[url('/images/Vector.png')] bg-cover bg-no-repeat bg-center rounded-full  flex items-center justify-center">
              <Image
                src="/images/logo.svg"
                width={150}
                height={150}
                alt="NeoGreen Logo"
              />
            </div>
          </a>
          <ul className="footer_list ">
            <li>
              <a href="https://neogreens.com/about-us/">About Us </a>
            </li>
            <li>
              <a href="https://neogreens.com/contact-us/">Contact Us </a>
            </li>
          </ul>
        </div>

        <ul className="social_list  ">
          <li>
            <a href="https://www.instagram.com/neogreensofficial">
              <Image src="/images/instagram.svg" width={25} height={25} alt="instagram"/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/neogreensofficial">
             <Image src="/images/Facebook.svg" width={25} height={25} alt=""/> 
             
            </a>
          </li>
          <li>
            <a href="https://www.threads.com/@neogreensofficial">
             <Image src="/images/Twitter.svg" width={25} height={25} alt="twitter"/>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/neogreensofficial">
              <Image src="/images/linkedin.svg" alt="" width={25} height={25}/>
            </a>
          </li>
        </ul>
        <div className="copy_right_wrap">
          <span>Copyright 2025 © NeoGreen All rights Reserved</span>
          <ul className="copy_right_list">
            <li>
              <a href="https://neogreens.com/privacy-policy/">
                Privacy Policy{" "}
              </a>
            </li>
            <li>
              <a href="https://neogreens.com/terms-conditions/">
                Terms &#038; Conditions{" "}
              </a>
            </li>
            <li>
              <a href="https://neogreens.com/return-policy/">Return Policy </a>
            </li>
            <li>
              <a href="https://neogreens.com/shipping-policy/">
                Shipping policy{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
