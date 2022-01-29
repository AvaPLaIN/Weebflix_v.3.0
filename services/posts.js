export const getPosts = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await data.json();
    return posts;
  } catch (error) {
    return [];
  }
};
