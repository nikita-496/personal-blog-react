import React, { useEffect, useRef, useState} from "react"
import { NotesService } from "../../../api/api"
import DataExtraction from "../../../common/Data/DataExtraction"
import DataList from "../../../common/Data/DataList"
import useFetching from "../../../hooks/useFetching"
import useObserver from "../../../hooks/useObserver"
import usePage from "../../../hooks/usePage"


export default function ViewNotes () {
  const [notes, setNote] = useState([])
  const [page, limit, changePage, setTotalPages, pages, setPage, totalPages] = usePage(1,8) 
  const [fetchNotes, isLoading, error] = useFetching( async () => {
    const response = await NotesService.getNotesByQuery(page, limit)
    setNote([...notes, ...response.notes])
    setTotalPages(response.totalPages)
  })
  
  //когда последний элемент в списке поялвяется в зоне видимости окна браузера, подгружаем новую порцию данных 
  const lastElelment = useRef()
  useEffect(() => fetchNotes(), [page])
  useObserver(lastElelment, page < totalPages, isLoading, ()=> {
    setPage(page + 1)
  })
  return(
    <div>
      <DataList meta={{post: true, isLoading, error}}>
        <>
          <DataExtraction data={notes} />
        </>
      </DataList>
      <div ref={lastElelment} style={{height: 20, background: "blue"}}></div>
    </div>
  )
}
