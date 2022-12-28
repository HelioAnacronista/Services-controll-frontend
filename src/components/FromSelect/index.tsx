import Select from "react-select";

function FromSelect(props: any) {

   const { ...
      selectProps } = props;

   return (
         <Select {...selectProps} />
   );
}
export default FromSelect;