import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getuses, selectusers } from '../features/users/usersSlice'
///les components lkol ly bsh ya9rahom

const Users = () => {

    const dispatch = useDispatch()

    const users = useSelector(selectusers)

    useEffect(() => {
        dispatch(getuses())
    }, []);


    return (
        <div>
                                <table className="table">
                                    <thead>
                                        <th>name</th>
                                        <th>email</th>
                                        <th>role</th>
                                    </thead>
                                    <tbody>

                                        {
                                            users.map((user,i) => {
                                                return(
                                                    <tr>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.__t}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
             
        </div>
    )
}

export default Users

/*

action react => redux  :  useDispatch (action)
read state from redux : useSelctor (selector)
*/