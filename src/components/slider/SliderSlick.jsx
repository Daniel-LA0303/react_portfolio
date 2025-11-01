import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardFullStackBackend from '../Card/CardFullStackBackend';



const SliderSlick = ({ data, speed, autoplay }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: speed || 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: autoplay || 4000,
    pauseOnHover: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand",
    className: "slides",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>

        {data.map((project, index) => (
          <div className="slide">
            <CardFullStackBackend
              project={project}
              key={index}
            />
          </div>
        ))}

      </Slider>
    </div>
  );
};

export default SliderSlick;
