import React, { useState } from 'react'
import styles from './user.module.css'
import allActions from '../../redux/actions'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router'

const UserForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
        userType:'user'
    })
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('adnan',user);
        dispatch(allActions.userAction(user))
        history.push('/login')
    }
    return (
        <section className={styles.section}>
            <div className='container'>
                <div className="d-flex justify-content-center h-100">
                    <div className={styles.card}>
                        <div className={styles.card_header}>
                            <h3>Sign Up</h3>
                            <div className="d-flex justify-content-end" id={styles.social_icon}>
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="input-group form-group" id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" id={styles.text} name="firstName" value={user.firstName} onChange={handleChange} className="form-control" placeholder="first name" />
                                    
                                </div>
                                <div className="input-group form-group" id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" id={styles.text} name="lastName" value={user.lastName} onChange={handleChange}  className="form-control" placeholder="last name" />
                                    
                                </div>
                                <div className="input-group form-group" id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="text" id={styles.text} name="email" value={user.email} onChange={handleChange}  className="form-control" placeholder="email" />
                                    
                                </div>
                                <div className="input-group form-group"id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" id={styles.text} name="password" value={user.password} onChange={handleChange}  className="form-control" placeholder="password" />
                                </div>
                                <div className="input-group form-group"id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-user-lock"></i></span>
                                    </div>
                                    <input type="password" id={styles.text} name="password_confirmation" value={user.password_confirmation} onChange={handleChange}  className="form-control" placeholder="Confrim password" />
                                </div>
                                <div className="row align-items-center" id={styles.remember}>
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="user" className="btn float-right" id={styles.login_btn}/>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer" id={styles.card_footer}>
                            <div className="d-flex justify-content-center links" id={styles.links} >
                                {/* Don't have an account?<a href="#">Sign Up</a> */}
                            </div>
                            <div className="d-flex justify-content-center">
                                {/* <a href="#">Forgot your password?</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserForm
