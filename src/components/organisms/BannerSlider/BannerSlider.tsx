import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './styles.scss';

import bannerMain from '../../../../public/img/banner-slider/light-phone.png';
import darkBannerMain from '../../../../public/img/banner-slider/dark-phone.png';
import banner3 from '../../../../public/img/banner-slider/light-accessories.png';
import darkBanner3 from '../../../../public/img/banner-slider/dark-accessories.png';
import banner2 from '../../../../public/img/banner-slider/light-tablet.png';
import darkBanner2 from '../../../../public/img/banner-slider/dark-tablets.png';
import { SliderButtonRight } from '../../atoms/buttons/SliderButtonRight';
import { SliderButtonLeft } from '../../atoms/buttons/SliderButtonLeft';
import { ThemeImage } from '@/components/atoms/icons/ThemeImage';

export const BannerSlider = ({ className = '' }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const slides = [
    {
      light: bannerMain,
      dark: darkBannerMain,
      alt: 'Phones banner',
      to: '/phones',
    },
    {
      light: banner3,
      dark: darkBanner3,
      alt: 'Tablets banner',
      to: '/tablets',
    },
    {
      light: banner2,
      dark: darkBanner2,
      alt: 'Watches banner',
      to: '/accessories',
    },
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
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        speed={3000}
        className="bannerslider"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <Link
              to={s.to}
              className="block w-full h-full relative"
            >
              <ThemeImage
                light={s.light as string}
                dark={s.dark as string}
                alt={s.alt}
                className="w-full h-full object-cover"
              />
              <div className="overlay" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

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
