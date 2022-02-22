import { DELETE, SUBMIT, UPDATE } from "./FormConsant";


 const FormAction=(entry)=>({
    type  :  SUBMIT,
    payload : {
        entry : entry
    } 
    
})

export const DeleteAction=(entryId)=>({
    type  :  DELETE,
    payload : {entryId} 
    
})

export const UpdateAction=(entryId,updateddata)=>({
    type  :  UPDATE,
    payload : {entryId,updateddata} 
    
})


export default FormAction;