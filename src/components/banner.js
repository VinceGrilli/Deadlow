import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"

let settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Banner = ({ BannerData }) => {
  return (
    <div className="container-fluid mx-0">
      <div className="slider-section mt-0 ">
        <Slider {...settings}>
          {BannerData.map((items, i) => (
            <div key={i} className="item">
              <div className="site-Banner">
                <Img sizes={items.node.image.fluid} />
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">{items.node.subHeading}</span>
                    <h1>{items.node.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner
