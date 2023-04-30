import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import Main from "./components/main";
import Signin from "./components/main/Signin";
import Signup from "./components/main/Signup";
import Home from "./components/main/Home";
import UserAuth from "./auth/UserAuth";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";
import NotFound from "./components/NotFound";
import AdminAuth from "./auth/AdminAuth";
import UserProvider from "./context/UserProvider";
import AdminProvider from "./context/AdminProvider";
import { useState } from "react";
import About from "./components/main/About";
import Contact from "./components/main/Contact";
import Exhibition from "./components/main/Exhibition";
import ManageArtwork from "./components/user/ManageArtwork";
import Gallery from "./components/main/Gallery";
import ManageExhibitions from "./components/user/ManageExhibitions";
import BrowseExhibition from "./components/user/BrowseExhibition";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <BrowserRouter>
      <AdminProvider currentUser={currentAdmin}>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route element={<Navigate to="/main/home" />} path="/" />
            <Route
              element={
                // <AdminAuth>
                // </AdminAuth>
                <Admin />
              }
              path="admin"
            >
              <Route element={<AdminProfile />} path="profile" />
            </Route>

            <Route element={<Main />} path="main">
              <Route element={<Home />} path="home" />
              {/* <Route element={<Gallery />} path="gallery" /> */}
              <Route element={<About />} path="aboutus" />
              <Route element={<Contact />} path="contact" />
              <Route element={<BrowseExhibition />} path="browseExhibition" />
              <Route element={<Signin />} path="signin" />
              <Route element={<Signup />} path="signup" />
            </Route>

            <Route
              element={
                <UserAuth>
                  <User />
                </UserAuth>
                  // <User />
              }
              path="user"
            >
              <Route element={<Home />} path="home" />
              <Route element={<Contact />} path="contact" />
              <Route element={<About />} path="aboutus" />
              <Route element={<BrowseExhibition />} path="browseExhibition" />
              <Route path="exhibition" element={<ManageExhibitions />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="artwork" element={<ManageArtwork />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
