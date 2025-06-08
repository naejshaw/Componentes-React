import { useState } from "react";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [text, setText] = useState(value);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    onChange(e.target.value);
  }

  return (
    <textarea
      className="rich-text-editor"
      value={text}
      onChange={handleChange}
      rows={10}
      style={{ width: "100%", padding: "10px", fontSize: "16px" }}
    />
  );
}
