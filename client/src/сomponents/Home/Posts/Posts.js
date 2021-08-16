import React, { useEffect} from "react"
import Pagination from "../../../common/Pagination/Pagination"
import useFetching from "../../../hooks/useFetching"
import { ArticleService } from "../../../api/api"
import getButtons from "../../../utility/buttons"
import DataExtraction from "../../../common/Data/DataExtraction"
import usePage from "../../../hooks/usePage"
import useSelectedCategoty from "../../../hooks/useSelectedCategory"
import DataList from "../../../common/Data/DataList"

export default function Posts ({article, getArticlesThunk}) {
  const [category, handleCategory] = useSelectedCategoty("все")
  const [page, limit, changePage, setTotalPages, pages] = usePage(1,8)
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    await getArticlesThunk(category, page, limit)
    const response = await ArticleService.getArticlesPost(page, limit)
    setTotalPages(response.totalPages)
  })
  //чтобы страницы обновлялись без отставания, установим зависимость
  useEffect(() => fetchPosts(),[page,category])
  
  return(
      <DataList meta={{post: true, isLoading, error}}>
        <>
        {getButtons(handleCategory)}
        <DataExtraction data={article} post={true}/>
        <Pagination pages={pages} currentPage={page} handlePage ={changePage}/>
        </>
      </DataList>
  )
}
