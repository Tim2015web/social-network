import { useMemo } from "react";
import { useFriendsStore } from "../../../stores/friendsStore";
import classes from "./Friends.module.scss";

// Интерфейс для пропсов компонента
interface PaginationProps {
  pageSize: 5 | 10 | 20 | 50;
  currentPage: number;
}

export default function Pagination({ pageSize, currentPage }: PaginationProps) {
  const { setCurrentPage, handlePageSizeChange, totalFriendsCount } =
    useFriendsStore();

  const pagesCount = useMemo(
    () => Math.ceil(totalFriendsCount / pageSize),
    [totalFriendsCount, pageSize]
  );

  const visiblePages = 5;

  const getPageNumbers = useMemo(() => {
    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = startPage + visiblePages - 1;

    if (endPage > pagesCount) {
      endPage = pagesCount;
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [currentPage, pagesCount]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= pagesCount) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className={classes.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={classes.navButton}
      >
        Назад
      </button>

      {getPageNumbers.map((item) => (
        <span
          key={item}
          className={currentPage === item ? classes.active : ""}
          onClick={() => handlePageChange(item)}
        >
          {item}
        </span>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
        className={classes.navButton}
      >
        Вперед
      </button>

      <select
        name="pageSize"
        value={pageSize}
        onChange={(event) =>
          handlePageSizeChange(Number(event.target.value) as 5 | 10 | 20 | 50)
        }
        className={classes.select}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </section>
  );
}
