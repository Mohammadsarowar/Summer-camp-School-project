import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel className='w-1/2 text-center'>
           
           
            <div>
                <img src='https://images.pexels.com/photos/5561456/pexels-photo-5561456.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </div>
            <div>
                <img src='https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600' />
            </div>
            <div>
                <img src='https://images.pexels.com/photos/1854897/pexels-photo-1854897.jpeg?auto=compress&cs=tinysrgb&w=600' />
            </div>
            
        </Carousel>
    );
};

export default Banner;