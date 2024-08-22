import cls from "./Search.module.scss";
import search from "../../assets/icons8-поиск-64.png";
import { FC } from "react";

const Search: FC = () => {
  return (
    <div className={cls.container}>
      <div>
        <form className={cls.form}>
          <input type="text" placeholder="Поиск ..." className={cls.input} />
          <button className={cls.btn}>
            <img src={search} className={cls.icon} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
