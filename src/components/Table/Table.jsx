import s from "./Table.module.css";

import { sortPosts } from "../../utils/sorting";

import shevronIcon1 from "../../images/shevron1.svg";
import shevronIcon2 from "../../images/shevron2.svg";

const Table = ({ posts, setPosts, sorted, setSorted }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th
            className={s.theader}
            onClick={(e) => sortPosts(e, posts, setPosts, sorted, setSorted)}
            id="id"
          >
            <span className={s.title}>ID</span>
            <img
              src={sorted.id ? shevronIcon1 : shevronIcon2}
              alt="shevron"
              className={s.shevron}
            />
          </th>
          <th
            className={s.theader}
            onClick={(e) => sortPosts(e, posts, setPosts, sorted, setSorted)}
            id="title"
          >
            <span className={s.title}>Заголовок</span>
            <img
              src={sorted.title ? shevronIcon1 : shevronIcon2}
              alt="shevron"
              className={s.shevron}
            />
          </th>
          <th
            className={s.theader}
            onClick={(e) => sortPosts(e, posts, setPosts, sorted, setSorted)}
            id="body"
          >
            <span className={s.title}>Описание</span>
            <img
              src={sorted.body ? shevronIcon1 : shevronIcon2}
              className="shevron"
              alt={s.shevron}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
