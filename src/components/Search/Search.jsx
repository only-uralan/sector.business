import searchIcon from "../../images/search.svg";
import s from "./Search.module.css";

const Seacrh = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={s.container}>
      <input
        type="text"
        value={searchQuery}
        className={s.search}
        placeholder="Поиск"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className={s.button}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default Seacrh;
