import React, { useEffect } from "react"
import Note from "./Note"

export default function ViewNotes (props) {
  useEffect (()=> {
    if(props.notes.length === 0) {
      props.get()
    }
  })
  let listNotes = props.notes.map(n => {
   return <Note key={n._id} text={n.text}/>
  })
  return(
    <>
      {listNotes}  
    </>
  )
}
