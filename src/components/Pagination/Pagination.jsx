import s from "./Pagination.module.css";
import { getPagesArray } from "../../utils/pages";

const Pagination = ({ page, setPage, totalPages }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={s.pagination}>
      <span
        className={s.prevnext}
        onClick={() => (page > 1 ? setPage((page) => page - 1) : null)}
      >
        Назад
      </span>
      <div>
        {pagesArray.map((item) => (
          <span
            key={item}
            className={page === item ? s.page__current : s.page}
            onClick={() => setPage(item)}
          >
            {item}
          </span>
        ))}
      </div>

      <span
        className={s.prevnext}
        onClick={() => (page < totalPages ? setPage((page) => page + 1) : null)}
      >
        Далее
      </span>
    </div>
  );
};

export default Pagination;
