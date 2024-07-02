import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'
import Cards from './Cards';

const Freebook = () => {
    const filterdata = list.filter((data)=>data.category==="Free");
    // console.log(filterdata);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
        <div className="max-w-screen-2xl container  md:px-20 px-4">
            <div>
                <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iste ipsum quibusdam veritatis ab esse aliquid dolor est sint perferendis, aliquam exercitationem perspiciatis provident, tempore saepe laborum quisquam adipisci? Fuga?
                </p>
            </div>
        <div>
        <Slider {...settings}>
        {
            filterdata.map((item)=>{
                 return <Cards item={item} key={item.id} />
            })
        }
      </Slider>
        </div>
        </div>
    </>
  )
}

export default Freebook