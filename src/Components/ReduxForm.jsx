import React from 'react'
import {useSelector , useDispatch }  from 'react-redux'
import FormAction, { DeleteAction, UpdateAction } from '../Redux/Form/FormAction'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import { DELETE } from '../Redux/Form/FormConsant'

const ReduxForm = () => {

    const mystate = useSelector((state) =>state.FormReducer)
    //console.log(mystate)
    const dispatch = useDispatch()
    const [valuee, setvalue] = useState({
        //id:uuid(),
        name:"",
        email:"",
    })
    const [arrayy, setarray] = useState([])
    //const [changebtn, updatebtn] = useState(true);
    //const [edititem, setedititem] = useState(null);

const inputt=(e)=>{
    const name= (e.target.name)
    const value= (e.target.value)
    setvalue({...valuee,[name]:value})
   
}
///console.log(value)

// const submit=()=>{
//     dispatch(FormAction(valuee),{id:uuid()})
//     console.log(valuee)
//     setvalue({name:"",email:""})
    
    // const items={...valuee ,id : uuid() }
    //     setvalue([...arrayy,items])
    //     console.log(items)
    //     setvalue({name:"",email:""})
//}

const submit=async()=>{
    // if ({...!valuee}) {
    // } else if ({...valuee} && !changebtn) {
    //   setarray(
    //     arrayy.map((item) => {
    //       if (item.id === edititem) {
    //         return { ...item, name: {...valuee} };
    //       }
    //       return item;
    //     })
    //   );
    //   updatebtn(true);
    //   setvalue({name:"",email:""})
    //   setedititem(null);
    // }
    // else{
    Object.assign(valuee,{id:uuid()})
    dispatch(FormAction(valuee))
    console.log(valuee)
    setvalue({name:"",email:""})
    const items={...valuee  }
        setarray([...arrayy,items])
    }


// const updateitem = (index) => {
//     let updateditem = arrayy.find((currentval) => {
//       return currentval.id === index;
//     });
//     console.log(updateditem);
//     updatebtn(false);
//     setvalue(updateditem.name);
//     setedititem(index);
// };

// const deleteitem=(id)=>{
//     const del = dispatch(DeleteAction(id))
//     console.log(del)
//     setarray(del)   
// }

// const deleteitem=(id)=>{
//     dispatch({type:DELETE  ,   payload:id})
//     console.log(id)
// }
    return (
        <div>
            <input  type="text" value={valuee.name} onChange={inputt} name="name"/>
            <input  type="text" value={valuee.email} onChange={inputt} name="email"/>
            <button onClick={submit} >Submit</button>
            <div>
            {
                arrayy.map((item)=>{              //arrayy.map
                    const {id ,name, email}=item
                    return (
                        <div key={id} >
                        {name} {email}
                        <button onClick={()=>dispatch(DeleteAction(id))}>Delete</button>
                        <button onClick={()=>dispatch(UpdateAction(id))} >Edit</button>
                        </div> 
                    )
                })
            }
            </div>
        </div>
        
    )
    
}
//<button onClick={()=>deleteitem(id)}>Delete</button>
//<button onClick={()=>dispatch(DeleteAction(id),console.log("deleted id",id))}>Delete</button>
//console.log(setstate);


export default ReduxForm;
