import Image237 from '../assets/images/icons/Orion_arrow-up-circle.png'
import Conversion from '../assets/images/icons/conversion.png'
import BgImage from '../assets/images/shutterstock_453643495-removebg.png'
export default function Hero() {
  return (
    <div>
      <div className='hero'>
        <div className='hero__content'>
          <p className='agency'>
            1 Agency for Designing awesome website on planet earth
          </p>
          <div className='hero__content-main'>
            <h2 className='hero__header'>
              We design complete for
              <br /> Online Saas Business
            </h2>
            <div className='hero__img__wrapper'>
              <img
                src={Image237}
                alt='237'
                width={80}
                className='hero__img-1'
              />
            </div>
          </div>
          <div className='hero__cta'>
            <button className='hero__btn'>Get free Design Consultation</button>
            <p>
              Get a Creative, Modern and Custom-Made <br /> for you Business
              today
            </p>
          </div>
        </div>
        <div className='hero__wrapper'>
          <img src={Conversion} alt='237' width={80} className='hero__img-2' />
        </div>

        <div className='bg-image-wrapper'>
          <img src={BgImage} alt='237' className='bg-img' />
        </div>
      </div>
    </div>
  )
}
