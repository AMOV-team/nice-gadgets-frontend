import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';

import bannerMain from '../../../../public/img/banner-slider/light-phone.png';
import banner3 from '../../../../public/img/banner-slider/light-accessories.png';
import banner2 from '../../../../public/img/banner-slider/light-tablet.png';
import { SliderButtonRight } from '../../atoms/buttons/SliderButtonRight';
import { SliderButtonLeft } from '../../atoms/buttons/SliderButtonLeft';

export const BannerSlider = ({ className = '' }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const slides = [
    { src: bannerMain, alt: 'Phones banner', to: '/phones' },
    { src: banner3, alt: 'Tablets banner', to: '/tablets' },
    { src: banner2, alt: 'Watches banner', to: '/accessories' },
  ];

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div
      className={`relative w-full max-w-full ${className}`}
      style={{ height: '80vh' }}
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={1000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="bannerslider"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((s, i) => (
          <SwiperSlide
            key={i}
            className="bannerslider-slide"
          >
            <Link
              to={s.to}
              className="slide-wrapper"
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

      {/* кастомные кнопки */}
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
