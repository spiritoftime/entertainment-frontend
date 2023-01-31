import { Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "./shared components/ProtectedRoute";
import React from "react";
import AllPage from "./pages/AllPage/AllPage";
import Categories from "./pages/categories page/Categories";
import HomePage from "./pages/HomePage/HomePage";
import IndividualPage from "./pages/Individual Page/IndividualPage";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/register page/Register";
import Layout from "./shared components/Layout";
import Bookmarks from "./pages/Bookmarks Page/Bookmarks";

export const IsAuthContext = React.createContext();
function App() {
  const { filmId, filmType, category } = useParams();
  const [authDetails, setAuthDetails] = useState({ isAuth: false, userId: "" });
  const authContextObj = { authDetails, setAuthDetails };
  return (
    <IsAuthContext.Provider value={authContextObj}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage type="movie" />} />
          <Route
            path="/bookmarks"
            element={
              <ProtectedRoute>
                <Bookmarks />
              </ProtectedRoute>
            }
          />
          <Route path="/tv_categories" element={<Categories type="tv" />} />
          <Route
            path="/movie_categories"
            element={<Categories type="movie" />}
          />
          <Route path="/movie" element={<AllPage type="Movie" />} />
          <Route
            path="/movie/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route path="/tv" element={<AllPage type="TV" />} />
          <Route path="/tv/:filmId" element={<IndividualPage genre="tv" />} />
          <Route path="/search" element={<AllPage />} />

          <Route
            path="/trending/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route
            path="/top/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route
            path="/upcoming/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route
            path="/now_playing/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route
            path="/popular/:filmId"
            element={<IndividualPage genre="movie" />}
          />
          <Route path="/:category/:filmType/week" element={<AllPage />} />
          <Route path="/all/:category/:filmType" element={<AllPage />} />
        </Route>
      </Routes>
    </IsAuthContext.Provider>
  );
}

export default App;
