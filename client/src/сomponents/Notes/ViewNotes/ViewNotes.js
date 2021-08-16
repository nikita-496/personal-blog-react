import React, { useEffect, useState } from "react"
import DataExtraction from "../../../common/Data/DataExtraction"
import DataList from "../../../common/Data/DataList"
import useFetching from "../../../hooks/useFetching"

export default function ViewNotes ({notes, get}) {
  const [fetchNotes, isLoading, error] = useFetching( async () => await get())
  useEffect(()=> fetchNotes(), [])
  
  return(
    <div>
      <DataList meta={{post: true, isLoading, error}}>
        <>
          <DataExtraction data={notes} />
        </>
      </DataList>
    </div>
  )
}
