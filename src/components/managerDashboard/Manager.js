import React from 'react'
import { Link } from 'react-router-dom'
import styles from './manager.module.css'
import {useHistory} from 'react-router'
import UserShow from '../userShow/UserShow'


const Manager = () => {
    const history= useHistory();
    const logout=()=>{
        localStorage.clear();
        history.push('/login');
    }
    return (
        <div className={styles.manager}>
            <div className='container'>
                <div className='row py-5'>
                    <h2>Welcome to Manager Dashboard!</h2>
                    <div className='col-4 d-flex'>
                        <div className={styles.btns}>
                        <Link to='/creatuser'><button id={styles.user_btn}>Create User</button></Link>
                        <button onClick={logout} id={styles.user_btn}>Log Out</button>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className={styles.data}>
                            <UserShow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager
