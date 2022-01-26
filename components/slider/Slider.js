//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Image from 'next/image';
import dynamic from 'next/dynamic';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import { SliderContainer } from './Slider.styled';

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS
import demon from '../../public/assets/demon-slayer-banner.jpeg';
import slime from '../../public/assets/slime.jpeg';
import punch from '../../public/assets/onepunchman.jpeg';

const images = [demon, slime, punch];

//     * LIBRARIES

//! --- COMPONENT ---
const Slider = () => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <SliderContainer>
      <Image
        src={demon}
        alt='slider image'
        layout='fill'
        quality={60}
        priority
        objectFit='cover'
        placeholder='blur'
      />
    </SliderContainer>
  );
};

export default Slider;
