import { DELETE, SUBMIT, UPDATE } from "./FormConsant";
//import uuid from '..//../Components/Form'

var initialstate=[]

const FormReducer=(state=initialstate,action)=>{
    var {type,payload}=action;
    switch(type){
        case SUBMIT:
           // if (payload.entry.length > 2){
            return [...state,payload.entry]; 
        case DELETE:
            return [...state.filter((arrayy)=>arrayy.id !== payload.entryId)]
        case UPDATE:
            return state.map(arrayy=>{
            if(arrayy.id === payload.entryId){
                return{
                    ...arrayy,
                    ...payload.updateddata
                }
            }
            else{
                return{
                ...arrayy
                }
            }
          })
        default:
            return state;
    }
    
}
export  default FormReducer;

//     switch (action.type) {
//         case SUBMIT:
//             const {id,entry}=action.payload;
//             return{
//                 ...state,
//                 list:[
//                     ...state.list,
//                     {
//                         id:id,
//                         entry:entry
//                     }
//                 ]

//             }
//         default:
//             return state;
//         }}
// export default FormReducer;
