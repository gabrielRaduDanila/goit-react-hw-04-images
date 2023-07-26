const LoadMore = ({ setPageNum, pageNum, maxPages }) => {
  const handleClick = () => {
    if (pageNum === maxPages) {
      setPageNum(1);
      return;
    }
    setPageNum(pageNum + 1);
  };
  return (
    <button className="Button" onClick={handleClick}>
      Load more
    </button>
  );
};
export default LoadMore;
