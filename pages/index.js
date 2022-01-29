//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Head from 'next/head';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Header from '../components/layout/Header';
import Slider from '../components/slider/Slider';

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)
import { getPosts } from '../services/posts';

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//! --- COMPONENT ---
const Home = ({ posts }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * HANDLERS

  //     * EVENT-LISTENERS
  console.log('posts: ', posts);

  //! --- RENDER ---
  return (
    <div>
      <Header title='Homepage' />
      {/* <Slider /> */}
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  };
}

export default Home;
