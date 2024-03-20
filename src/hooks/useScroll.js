export const handleScroll = function (refs, setPage) {
  return function () {
    const { scrollHeight, scrollTop, clientHeight } = refs?.current;

    if (scrollTop + clientHeight >= scrollHeight - 20) {
      setPage((prevPage) => prevPage + 1); // Increment page number to fetch next page of data
    }
  };
};
