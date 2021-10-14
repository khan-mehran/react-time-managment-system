import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import allActions from '../../redux/actions'
import styles from './usershow.module.css'

const UserShow = () => {
    
    const [del, setDel] = useState('')
    const allUsers = useSelector(state => state?.getUserReducer?.users?.data?.users?.data)
    console.log('array of data...',allUsers)
    const dispatch = useDispatch()
    
    const handelDelete = (id) => {
         
        if (window.confirm('Are you sure')) {
            dispatch(allActions.userDelAction(id))
          }
          setDel(id)
        }

    useEffect(() => {
        dispatch(allActions.getUserAction())
        //eslint-disable-next-line
    },[del])
 
    return (
        <div>
            <table className={styles.table}>
                <thead >
                    <tr>
                        <th>User Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((item,index)=>{
                        return (
                            <tr key={index}>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName }</td>
                            <td>
                                <div className={styles.table_btn}>
                                <button class="btn btn-primary">Update</button>
                                <button class="btn btn-danger" onClick={() => handelDelete(item.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserShow
