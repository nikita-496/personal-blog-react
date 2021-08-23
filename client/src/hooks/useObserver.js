import { useEffect, useRef } from "react"

const useObserver = (ref, canLoad, isLoading, callback) => {
  //для доступа к observer внутри компаненты
  const observer = useRef()

  useEffect(()=> {
    if(isLoading) return
    if(observer.current) observer.current.disconnect()

    const options = { root: document}
    //каждый раз, когда элемент (div) в зоне видимости, отрабатывает callback
    const cb = function(entries, observer) {
      if(entries[0].isIntersecting && canLoad) {
       callback()
      }
    };
    observer.current = new IntersectionObserver(cb,options);
    //указание за каким элементом идет наблюдение
    observer.current.observe(ref.current)
  }, [isLoading])
}
export default useObserver