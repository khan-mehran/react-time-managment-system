import React from 'react'
import { Link } from 'react-router-dom'
import styles from './admin.module.css'
import {useHistory} from 'react-router'

const Admin = () => {
    const history= useHistory();
    const logout=()=>{
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div className={styles.manager}>
            <div className='container'>
                <div className='row py-5'>
                    <h2>Welcome to Admin Dashboard!</h2>
                    <div className='col-4 d-flex'>
                        <div className={styles.btns}>
                        <Link to='/creatuser'><button id={styles.user_btn}>Create User</button></Link>
                        <button id={styles.user_btn}>All Users</button>
                        <button id={styles.user_btn}>Work Logs</button>
                        <button onClick={logout} id={styles.user_btn}>Log Out</button>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className={styles.data}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
