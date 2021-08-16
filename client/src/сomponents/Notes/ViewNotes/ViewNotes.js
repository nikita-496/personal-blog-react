import React, { useEffect, useState } from "react"
import Preloader from "../../../common/Preoloader/Preloader"
import useFetching from "../../../hooks/useFetching"
import Note from "./Note"

export default function ViewNotes ({notes, get}) {
  debugger
  const [totaListNote, setTotaListNote] = useState(0)

  useEffect(()=> fetchNotes(), [])

  const [fetchNotes, isNotesLoading, notesError] = useFetching( async () => {
    await get()
    //setListNote(notes)
  })
  let listNote = notes.map(n => {
   return <Note key={n._id} text={n.text}/>
  })
  return(
    <>
      {notesError && <h1>Произошла ошибка ${notesError}</h1>}
      {isNotesLoading ? <Preloader></Preloader> :listNote}
    </>
  )
}
