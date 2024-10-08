import { useState, useEffect } from "react";
import styles from "./contentBlock.module.css";

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
    <div cmsId={contentId}>
      <div className={styles.ContentBlock}>{content}</div>
    </div>
  );
};

export default ContentLoader;
