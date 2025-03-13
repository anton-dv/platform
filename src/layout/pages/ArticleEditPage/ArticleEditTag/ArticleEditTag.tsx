import { FC } from "react";
import { Input } from "../../../ui/Input/Input";
import { Button } from "../../../ui/Button/Button";

export type ArticleEditTagProps = {
  value: string;
  index: number;
  onDelete: (index: number) => void;
  onChange: (index: number, value: string) => void;
};

export const ArticleEditTag: FC<ArticleEditTagProps> = ({ index, value, onDelete, onChange }) => {
  const onTagChange = (value: string) => onChange(index, value);
  const onTagDelete = () => onDelete(index);

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Input name="Tag" hideLabel value={value} onChange={onTagChange} width={300} />
      <Button variant="red" size="medium" onClick={onTagDelete}>
        Delete
      </Button>
    </div>
  );
};
