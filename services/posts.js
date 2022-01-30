export const getPosts = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    return posts;
  } catch (error) {
    return [];
  }
};

export const getPost = async (id) => {
  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await data.json();
    return post;
  } catch (error) {
    return {};
  }
};

export const getUsers = async () => {
  try {
    const data = await fetch(
      'https://angry-beaver-4ee432.netlify.app/users.json'
    );
    const { users } = await data.json();
    return users;
  } catch (error) {
    return [];
  }
};
