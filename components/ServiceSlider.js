//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';


// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Website Developer',
    description: 'The website is responsive, functional and attractive.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Stunning interface, stunning user experience.',
  },
  {
    icon: <RxCrop />,
    title: 'Mobile Developer',
    description: 'Innovative app, smooth user experience.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Compelling content for business success.',
  },
  {
    icon: <RxRocket />,
    title: 'Duty jockey',
    description: 'Expert help for efficient academic assignments.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
            {/* icons */}
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            {/* title and deskripsi */}
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            {/* arrow */}
            <div>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
