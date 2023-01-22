import { MdDeleteForever } from "react-icons/md";

function ButtonDelete(props: any) {
  const { ...inputProps } = props;

  return (
    <button
      className="btn-action-style"
      style={{ color: "#FF7782" }}
      {...inputProps}
    >
      <MdDeleteForever></MdDeleteForever>
    </button>
  );
}

export default ButtonDelete;
