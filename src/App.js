import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { getPagesCount } from "./utils/pages";
import { filterPosts } from "./utils/sorting";

import Table from "./components/Table/Table";
import Seacrh from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [sorted, setSorted] = useState({
    id: false,
    title: false,
    body: false,
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: 10,
          _page: page,
        },
      })
      .then((d) => {
        setPosts(d.data);
        setTotalPages(getPagesCount(d.headers["x-total-count"]));
      });
    navigate(`/:${page}`);
  }, [page]);

  let sortedPosts = useMemo(
    () => filterPosts(posts, searchQuery),
    [page, searchQuery]
  );
  return (
    <div className="App">
      <Seacrh searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {posts && (
        <Table
          posts={searchQuery ? sortedPosts : posts}
          setPosts={setPosts}
          sorted={sorted}
          setSorted={setSorted}
        />
      )}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default App;
