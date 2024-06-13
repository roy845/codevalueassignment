import { useEffect } from "react";

// why do you need this if you have helmet?
const useDocumentTitle = (title: string): null => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default useDocumentTitle;
