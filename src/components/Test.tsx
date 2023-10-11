import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselMenu = () => {
  return (
    <div className="block md:grid grid-cols-5 gap-[5%] justify-center items-center m-[5%]">
      <div className="col-span-3">
        <Carousel>
          <div>
            <img src="/images/carousel-img-1.jpg" alt="Image 1" />
          </div>
          <div>
            <img src="/images/carousel-img-3.jpg" alt="Image 2" />
          </div>
          <div>
            <img src="/images/carousel-img-4.jpg" alt="Image 3" />
          </div>
          <div>
            <img src="/images/carousel-img-5.jpg" alt="Image 4" />
          </div>
        </Carousel>
      </div>
      <div className="col-span-2 p-4 flex flex-col justify-between items-center">
        <p className="menu text-center m-[4%] text-3xl md:text-4xl xl:text-8xl">Explore Our Delicious Menu</p>
        <p className='menu xl:text-4xl text-center my-5 md:my-5 text-xl'>"Laughter is brightest in the place where the food is." – Irish Proverb</p>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 bg-opacity-70 text-white rounded-xl p-3">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselMenu;