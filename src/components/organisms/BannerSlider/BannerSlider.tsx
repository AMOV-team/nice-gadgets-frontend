import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.scss';

import bannerMain from '../../../../public/img/banner-slider/light-phone.png';
import banner3 from '../../../../public/img/banner-slider/light-accessories.png';
import banner2 from '../../../../public/img/banner-slider/light-tablet.png';
import { SliderButtonRight } from '../../atoms/buttons/SliderButtonRight';
import { SliderButtonLeft } from '../../atoms/buttons/SliderButtonLeft';

export const BannerSlider = ({ className = '' }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState<number | null>(null);

  const slides = [
    { src: bannerMain, alt: 'Phones banner', to: '/phones' },
    { src: banner3, alt: 'Tablets banner', to: '/tablets' },
    { src: banner2, alt: 'Watches banner', to: '/accessories' },
  ];

  const slideBg = ['#ffffff', '#ffffff', '#ffffff'];

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div
      className={`relative w-full max-w-full ${className}`}
      style={{ height: '80vh' }}
    >
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setAnimationTrigger(swiper.realIndex);
          setActiveIndex(swiper.realIndex);
        }}
        className="bannerslider"
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={2000}
        pagination={{
          clickable: true,
          el: '.bannerslider-pagination',
          bulletClass: 'bannerslider-bullet',
          bulletActiveClass: 'bannerslider-bullet-active',
        }}
        loop
        modules={[Autoplay, Pagination, Navigation]}
      >
        {slides.map((s, i) => (
          <SwiperSlide
            key={i}
            className={`bannerslider-slide ${i === activeIndex ? 'bannerslider-slide-active' : ''}`}
          >
            <Link
              to={s.to}
              className={`slide-wrapper ${i === activeIndex ? 'is-active' : ''} ${i === animationTrigger ? 'fade-in' : ''}`}
              style={{ backgroundColor: slideBg[i] }}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bannerslider-pagination" />

      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10">
        <SliderButtonLeft
          onClick={handlePrev}
          disabled={false}
        />
      </div>
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10">
        <SliderButtonRight
          onClick={handleNext}
          disabled={false}
        />
      </div>
    </div>
  );
};
