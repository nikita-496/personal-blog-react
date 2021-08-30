import React, { useEffect } from "react"
import Pagination from "../../../common/Pagination/Pagination"
import useFetching from "../../../hooks/useFetching"
import { ArticleService } from "../../../api/api"
import DataExtraction from "../../../common/_functionality/Data/DataExtraction"
import usePage from "../../../hooks/usePage"
import useSelectedCategoty from "../../../hooks/useSelectedCategory"
import DataList from "../../../common/_functionality/Data/DataList"
import SelectCategory from "../../../common/Categories/SelectCategory"

export default function Posts ({article, getArticles}) {
  const [category, handleCategory] = useSelectedCategoty("все")
  const [page, limit, changePage, setTotalPages, pages] = usePage(1,8)
  const [fetchPosts, isLoading, error] = useFetching(async () => {
    await getArticles(category, page, limit)
    const response = await ArticleService.getArticlesPost(page, limit)
    setTotalPages(response.totalPages)
  })
  //чтобы страницы обновлялись без отставания, установим зависимость
  useEffect(() => fetchPosts(),[page,category])
  
  return(
      <DataList meta={{post: true, isLoading, error}}>
        <>
        <SelectCategory callback={handleCategory} filter={true}/>
        <DataExtraction data={article} post={true}/>
        <Pagination pages={pages} currentPage={page} handlePage={changePage}/>
        </>
      </DataList>
  )
}
