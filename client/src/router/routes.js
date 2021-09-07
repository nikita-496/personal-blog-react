import ErrorPage from "../common/ErrorPage/ErrorPage"
import Home from "../сomponents/Home/Home"
import NotesContainer from "../сomponents/Notes/NotesContainer"
import Profile from "../сomponents/Profile/Profile"
import Reset from "../сomponents/Reset/Reset"
import SandBoxContainer from "../сomponents/SandBox/SandBoxContainer"
import SearchResult from "../сomponents/SearchResult/SearchResult"
import SignUp from "../сomponents/SignUp/SignUp"
import TextPageContainer from "../сomponents/TextPage/TextPageContainer"
import Works from "../сomponents/Works/Works"
import Auth from "../сomponents/Auth/Auth"


export const privateRoutes = [
  {path: "/all", component: <Home/>, exact: true},
  {path: "/article/:articleId", component: <TextPageContainer/>, exact: true},
  {path: "/note", component: <NotesContainer/>, exact: true},
  {path: "/sandbox", component: <SandBoxContainer/>, exact: true},
  {path: "/profile", component: <Profile/>, exact: true},
  {path: "/search", component: <SearchResult/>, exact: true},
  {path: "/works", component: <Works/>, exact: true},
  {path: "/reset", component: <Reset/>, exact: true},
  {path: "/error", component: <ErrorPage/>, exact: true}
]

export const publicRoutes = [
  {path: "/article/:articleId", component: <TextPageContainer/>, exact: true},
  {path: "/note", component: <NotesContainer/>, exact: true},
  {path: "/profile", component: <Profile/>, exact: true},
  {path: "/search", component: <SearchResult/>, exact: true},
  {path: "/works", component: <Works/>, exact: true},
  {path: "/auth", component: <Auth/>, exact: true},
  {path: "/signup", component: <SignUp/>, exact: true},
  {path: "/reset", component: <Reset/>, exact: true},
  {path: "/error", component: <ErrorPage/>, exact: true}
]

