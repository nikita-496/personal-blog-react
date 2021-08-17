import React from "react"
import Post from "../../сomponents/Home/Posts/Post/Post"
import Note from "../../сomponents/Notes/ViewNotes/Note"


const DataExtraction = ({data, post}) => {
  
  let listData = data.map(d => {
    return (post) ?
    <Post  
      key={d._id}
      titleArticle={d.title} 
      text={d.paragraph} 
      date={d.publicDate} 
      category={d.category} 
    />
    : <Note key={d._id} text={d.text}/>
    }
  )
  return (
    <>
      {listData}
      </>
  )
}

export default DataExtraction