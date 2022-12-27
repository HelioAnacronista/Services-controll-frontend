//gerar um novo objeto de formulário onde o campo de nome "name" seja atualizado com o valor "newValue"
export function update(inputs: any, name: string, newValue: any) {
   return { ...inputs, [name]: { ...inputs[name], value: newValue } }
}

//gerar um objeto contendo apenas os valores dos campos do formulário
export function toValues(inputs: any) {
   const data: any = {};

   for (var name in inputs) {
      data[name] = inputs[name].value;
   }

   return data;
}

//gerar um novo objeto de formulário onde os campos sejam os valores contidos em "newValues"
export function updateAll(inputs: any, newValues: any) {
   const newInputs: any = {};

   for (var name in inputs) {
      newInputs[name] = { ...inputs[name], value: newValues[name] }
   }
   return newInputs;
}

//gerar um novo objeto de formulário contendo o campo "invalid" (que pode valer "true" ou "false") 
//para o campo de formulário cujo nome é "name"
export function validate(inputs: any, name: string) {
   if (!inputs[name].validation) {
      return inputs;
   }
   //pega o value(id) do input para validar 
   const isInValid = !inputs[name].validation(inputs[name].value);
   return { ...inputs, [name]: {...inputs[name], invalid: isInValid.toString()} }
}


export function toDirtyAll(inputs: any) {
   const newInputs: any = {};

   for (var name in inputs) {
      newInputs[name] = { ...inputs[name], dirty: 'true' }
   }

   return newInputs;
}

export function validateAll(inputs: any) {
   const newInputs: any = {};

   for (var name in inputs) {
      if (inputs[name].validation) {
         const isInvalid = !inputs[name].validation(inputs[name].value);

         newInputs[name] = {... inputs[name], invalid : isInvalid.toString()};
      }
      else {
         newInputs[name] = {... inputs[name]}
      }
   }

   return newInputs;
}

export function dirtyAndValidateAll(inputs : any) {
   return validateAll(toDirtyAll(inputs));
}

export function hasAnyInvalid(inputs: any) {
   for (var name in inputs) {
      if (inputs[name].dirty === "true" && inputs[name].invalid === "true") {
         return true;
      }
   }
   return false;
}