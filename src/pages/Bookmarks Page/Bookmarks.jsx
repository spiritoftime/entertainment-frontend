import useBookmarkFetches from "../../custom hooks/useBookmarkFetches";
const Bookmarks = () => {
  const data = useBookmarkFetches();
  let films = [];
  if (Object.keys(fetchedData).length === 0) return <LoadingSpinner />;
  data.bookmarks.map((bookmark, idx) => {});
  return;
};

export default Bookmarks;
