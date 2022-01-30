//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Head from 'next/head';
import useSWR from 'swr';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS
import Header from '../components/layout/Header';
import Slider from '../components/slider/Slider';

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)
import { getPosts, getUsers } from '../services/posts';

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

const fetcher = (...args) => fetch(...args).then((res) => res.json());

//! --- COMPONENT ---
const Home = ({ users }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * DATA-FETCHING
  // const {
  //   data: users,
  //   isLoading,
  //   error,
  // } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher);

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Header title='Homepage' />
      <div className='user-container'>
        {users?.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
      {/* <div className='post-container'>
        {posts.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </div> */}
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export async function getStaticProps() {
  const users = await getUsers();

  return {
    props: { users },
    // revalidate: 600,
  };
}

export default Home;
