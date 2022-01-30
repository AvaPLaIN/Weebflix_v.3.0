//! --- IMPORTS ---
//     * NEXT-JS-MODULES
import Head from 'next/head';
import Link from 'next/Link';

//     * REACT-JS-MODULES

//     * PAGES

//     * COMPONENTS

//     * STATE-MANAGEMENT (REDUX)

//     * SERVICES (API)
import { getPosts, getPost } from '../../services/posts';

//     * CUSTOM-HOOKS

//     * UTILS/HELPERS

//     * ASSETS

//     * LIBRARIES

//! --- COMPONENT ---
const Post = ({ post }) => {
  //     * INIT

  //     * STATES

  //     * HOOKS

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <div>
      <Link href='/'>Home</Link>
      <h1>{post.title}</h1>
    </div>
  );
};

//! --- GET_SERVER_SIDE_PROPS ---
export const getStaticProps = async (context) => {
  const post = await getPost(context.params.id);
  return {
    props: { post },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  const postIds = posts.map((post) => post.id);
  const paths = postIds.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Post;
