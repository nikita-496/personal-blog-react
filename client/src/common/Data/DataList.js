import React from "react"
import Preloader from "../Preoloader/Preloader"

const DataList = ({meta, children}) => {
  return (
    <div>
      {meta.error && <h1>Произошла ошибка ${meta.error}</h1>}
      {meta.isLoading ? <Preloader></Preloader> 
        : meta.post ?  <> {children} </>
        : 1}
    </div>
  )
}

export default DataList