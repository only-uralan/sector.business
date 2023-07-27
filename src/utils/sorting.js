export const sortPosts = (e, posts, setPosts, sorted, setSorted) => {
  if (e.target.id === "id") {
    return setPosts(
      [...posts].sort((a, b) => {
        if (sorted.id) {
          setSorted(({ ...sorted }) => ({ id: !sorted.id }));
          return a[e.target.id] - b[e.target.id];
        } else {
          setSorted(({ ...sorted }) => ({ id: !sorted.id }));
          return b[e.target.id] - a[e.target.id];
        }
      })
    );
  } else {
    return setPosts(
      [...posts].sort((a, b) =>
        sorted[e.target.id]
          ? (setSorted(({ ...sorted }) => ({
              [e.target.id]: !sorted[e.target.id],
            })),
            a[e.target.id].localeCompare(b[e.target.id]))
          : (setSorted(({ ...sorted }) => ({
              [e.target.id]: !sorted[e.target.id],
            })),
            b[e.target.id].localeCompare(a[e.target.id]))
      )
    );
  }
};

export const filterPosts = (posts, searchQuery) => {
  return posts?.filter(
    (item) =>
      String(item.id).includes(searchQuery) ||
      item.title.includes(searchQuery) ||
      item.body.includes(searchQuery)
  );
};
