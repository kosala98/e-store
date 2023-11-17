import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigatror">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (100+)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce website is your digital storefront on the internet. It
          facilitates the transaction between a buyer and seller. It is the
          virtual space where you showcase products, and online customers make
          selections. Your website acts as the product shelves, sales staff, and
          cash register of your online business channel.
        </p>
        <p>
          Please bear in mind that the photo may be slightly different from the
          actual item in terms of color due to lighting conditions or the
          display used to view
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
