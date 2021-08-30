import { connect } from "react-redux"
import { getArticles } from "../../../redux/features/article/thunk"
import Search from "./Search"

let mapStateToProps = (state) => {
  return {
    article: state.articles.article,
  }
}
const SearchContainer = connect(mapStateToProps, {
  getArticles
})(Search)

export default SearchContainer