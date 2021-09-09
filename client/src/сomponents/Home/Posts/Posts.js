import React, { useEffect, } from "react"
import Pagination from "../../../common/Pagination/Pagination"
import useFetching from "../../../hooks/useFetching"
import { ArticleService } from "../../../api/api"
import DataExtraction from "../../../common/_functionality/Data/DataExtraction"
import usePage from "../../../hooks/usePage"
import useSelectedCategoty from "../../../hooks/useSelectedCategory"
import DataList from "../../../common/_functionality/Data/DataList"

export default function Posts ({article, getArticles}) {
 
  let data = article
  //Обработка данных о статье, когда возвращаемся из страницы с полным текстом статьи (TextPage) на страницу публикаций (Posts)
  //данные о тексте приходят в объекте, для последующего извлечения из них инофрмации (методом map), требуется преобразовать их в массив объекта.
  if(!Array.isArray(article)) {
    let articleArr = []
    articleArr.push(article)
    data = articleArr
  }

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
        <DataExtraction data={data} post={true}/>
        <Pagination pages={pages} currentPage={page} handlePage={changePage}/>
        </>
      </DataList>
  )
}
