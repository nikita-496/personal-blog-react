import { useState } from "react"
import { getPages } from "../utility/pages"

const usePage = (defaultPage, defaultLimit) => {
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(defaultPage)
  const [limit, setLimit] = useState(defaultLimit)

  let pages = getPages(totalPages)

  const changePage = (page) => {
    setPage(page)
  }
  return [page, limit, changePage, setTotalPages, pages, setPage, totalPages]
}

export default usePage