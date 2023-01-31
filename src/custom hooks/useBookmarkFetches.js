import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchBookmark from "../helper-functions/fetchBookmark";
import { IsAuthContext } from "../App";
export default function useBookmarkFetches() {
  const { authDetails } = useContext(IsAuthContext);
  const [bookmarks, setBookmarks] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    if (authDetails.isAuth) {
      fetchBookmark({ createdBy: authDetails.userId }).then((res) => {
        setBookmarks(res);
      });
    }
  }, []);
}
