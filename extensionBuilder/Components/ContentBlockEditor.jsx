import styles from "./contentBlockEditor.module.css";
import SubmitButton from "./SubmitButton";

const ContentBlockEditor = ({ value, onChange, contentId }) => {
  console.log({ value });
  return (
    <div className={styles.ContentBlockEditorWrapper}>
      <textarea
        className={styles.ContentBlockEditor}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <SubmitButton
        className={styles.SubmitButton}
        value={value}
        contentId={contentId}
      />
    </div>
  );
};

export default ContentBlockEditor;
