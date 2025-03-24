import React ,{useState} from "react";
import './additem.css';
import Display from "./Display";

function Add(){

    const [item, setItem] = useState('');
    const [submit,setSubmit] = useState([]);

    const deleteItem = (index) =>{
        let temp = [...submit];
        temp.splice(index,1);
        setSubmit(temp);
    }

    const editItem = (index) => {
        let updateName = prompt("Please enter the item name to edit");
        let temp2 = [...submit];
        temp2[index]=updateName;
        setSubmit(temp2);
    }
    return(
        <>
            <div className="inputContainer">
                <input type="text" name="aname" className="addTask"  value={item} placeholder="Enter a task..." onChange={(e) => setItem(e.target.value)}/>
                <button class="addButton" onClick={() =>{
                    setSubmit([...submit, item]);
                    setItem("");
                }}>Add</button>
            </div>
            {submit.map((task, index) => (
                <Display key={index} items={task} ondelete = {() => deleteItem(index)} onedit={() => editItem(index)}/>
            ))}
        </>
    )
}

export default Add;