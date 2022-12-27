function FromInput(props: any) {

   const { ...inputProps } = props;

   return (
         <input {...inputProps} />
   );
}
export default FromInput;