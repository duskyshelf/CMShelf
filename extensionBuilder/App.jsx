import { useState } from "react";
import { createRoot } from "react-dom/client";

import ContentBlockEditor from "./Components/ContentBlockEditor";

const EditableBlock = ({ content, id }) => {
  const [editedContent, setContent] = useState(content);

  return (
    <div>
      <ContentBlockEditor
        value={editedContent}
        onChange={setContent}
        contentId={id}
      />
    </div>
  );
};

const elements = document.querySelectorAll("[cmsid]");
elements.forEach((element) => {
  const domNode = createRoot(element);
  const content = element.children[0].innerHTML;
  const id = element.getAttribute("cmsid");
  domNode.render(<EditableBlock content={content} id={id} />);
});
