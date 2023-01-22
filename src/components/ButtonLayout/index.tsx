import { ButtonStyleLayout } from "./style";

type Props = {
  name: string;
  img?: any;
};

function ButtonLayout({ name, img }: Props): JSX.Element {
  return (
    <ButtonStyleLayout>
      <h4>{name}</h4>
      <div>{img}</div>
    </ButtonStyleLayout>
  );
}

export default ButtonLayout;
