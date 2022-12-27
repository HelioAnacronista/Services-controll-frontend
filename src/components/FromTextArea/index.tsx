function FromTextArea(props : any) {
   
   const { ...textareaPops } = props;

   return (
      <textarea {...textareaPops } />
   );
}

export default FromTextArea;