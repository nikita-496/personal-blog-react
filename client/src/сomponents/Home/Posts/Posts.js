import React, { useEffect, useState } from "react"
import Post from "../../Home/Posts/Post/Post"
import Pagination from "../../../common/Pagination/Pagination"
import Preloader from "../../../common/Preoloader/Preloader"
import useFetching from "../../../hooks/useFetching"
import { ArticleService } from "../../../api/api"
import { getPages } from "../../../utility/pages"
import getButtons from "../../../utility/buttons"

export default function Posts ({article, getArticlesThunk}) {
  const [category, setCategory] = useState("все")  
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(8)

  //чтобы страницы обновлялись без отставания, установим зависимость
  useEffect(() => fetchPosts(),[page,category])

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    await getArticlesThunk(category, page, limit)
    const response = await ArticleService.getArticlesPost(page, limit)
    setTotalPages(response.totalPages)
  })

  let pages = getPages(totalPages)

  const changePage = (page) => {
    setPage(page)
  }
  const handleCategory = (e) => {
  return setCategory(e.target.value)
  }

  let articleElement = article.map(a => 
    <Post  
      key={a._id}
      titleArticle={a.title} 
      text={a.paragraph} 
      date={a.publicDate} 
      category={a.category} 
    />)
  
  return(
    <div>
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostLoading ? <Preloader></Preloader>
      :  <>
      {getButtons(handleCategory)}
      {articleElement}
      <Pagination pages={pages} currentPage={page} handlePage ={changePage}/>
      </>
      }
    </div>
  )
}