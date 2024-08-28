import { useState, useEffect } from "react";

const ContentLoader = ({ contentId }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3100/id/${contentId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setContent(data[0].content);
      });
  }, [contentId]);

  return (
    <div className={"App-intro"} cmsId={contentId}>
      {content}
    </div>
  );
};

export default ContentLoader;
