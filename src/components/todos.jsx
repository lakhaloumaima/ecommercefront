import React, { useState } from 'react'
import '../assets/css/todos.css'
import { AiTwotoneDelete } from 'react-icons/ai';
import { AiTwotoneEdit } from 'react-icons/ai';

const Todos = () => {

    const [displayform, setdisplayform] = useState(false);

    const [id, setid] = useState(0);
    const [todoslist, settodoslist] = useState([]);

    const [description, setdescription] = useState('');

    /////////////add
    const addtodo = () => {
        setid(id + 1)
        let todo = {
            id: id,
            description: description
        }

        todoslist.push(todo)
        console.log(todoslist);
        setdisplayform(false)
        setdescription('')
    }

/////////// delete
    const deletetodo = (id)=> {

        let pos

        for (let i = 0; i < todoslist.length; i++) {
            const element = todoslist[i];

            if (element.id === id)
                pos = i
        }

        let todos = [...todoslist]
        todos.splice(pos, 1)
        settodoslist(todos)

    }


    const TableRow = ({ todo }) => {

        const [dispalyinput, setdispalyinput] = useState(false);
        const [descriptionup, setdescriptionup] = useState(todo.description);

        const updatedesc = (e) => {
            if (e.key === 'Enter') {

                let pos
                for (let i = 0; i < todoslist.length; i++) {
                    const element = todoslist[i];
                    if (element.id === todo.id)
                        pos = i
                }

                let arr = [...todoslist]
                arr[pos].description = e.target.value

                settodoslist(arr)
                setdispalyinput(false)
            }
        }

        return (
            <tr>
                <th scope="row">{todo.id}</th>
                <td>
                    {
                        dispalyinput ? <input onKeyDown={(e) => updatedesc(e)} value={descriptionup} onChange={(e) => setdescriptionup(e.target.value)} type="text" /> : todo.description
                    }

                </td>
                <td><AiTwotoneDelete onClick={() => deletetodo(todo.id)} style={{ color: 'red', cursor: "pointer" }} /></td>
                <td><AiTwotoneEdit onClick={() => setdispalyinput(true)} style={{ color: 'blue', cursor: "pointer" }} /></td>
            </tr>
        )
    }


    return (
        <div className="todos">
            <h2 className="mb-5" >Todos List</h2>
            <div style={{ display: "flex", alignItems: "center" }} >
                {displayform && <div className="row mx-4 g-3">

                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                        <input value={description} onChange={(e) => setdescription(e.target.value)} type="text" className="form-control" id="inputPassword2" placeholder="Password" />
                    </div>
                    <div className="col-auto">
                        <button onClick={() => addtodo()} className="btn btn-primary mb-3">add</button>
                    </div>
                </div>}
                <button onClick={() => setdisplayform(!displayform)} className={displayform ? "close-form" : "add-todo-button"}>{displayform ? 'x' : '+'}</button>
            </div>


            <table class="table text-center mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">description</th>
                        <th scope="col">delete</th>
                        <th scope="col">update</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        todoslist.map((todo, i) => {
                            return (
                                <TableRow todo={todo} />
                            )
                        })
                    }
                </tbody>
            </table>



        </div>
    )
}

export default Todos


// todo json object 
/*

{
    id : 1,
    description :'hhjhjdshjdsj'
}

*/

/*
[
    {
    id : 1,
    description :'hhjhjdshjdsj'
},{
    id : 2,
    description :'hhjhjdshjdsj'
}{
    id : 3,
    description :'hhjhjdshjdsj'
}
]

*/


/// redux netaamluh khtr najmush naadyw data mel parent lel child ben les components