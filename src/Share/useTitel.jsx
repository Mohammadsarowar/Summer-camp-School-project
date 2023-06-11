import { useEffect } from "react";


const useTitle = (title) => {
   useEffect(()=>{
    document.title = `${title}-Summer Camp Learning School`;
   },[title])
};

export default useTitle;