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
    const data = await fetch('http://localhost:8800/api/anime/getUsers');
    const users = await data.json();
    return users.data.users;
  } catch (error) {
    return [];
  }
};
