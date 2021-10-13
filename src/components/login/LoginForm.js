import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './form.module.css'
import allActions from '../../redux/actions'
import { useHistory } from 'react-router'

    const LoginForm = () => {
        const history = useHistory()
        const data = useSelector(state => state)
        console.log('mehfd',data);
        const dispatch = useDispatch();
        const [login, setLogin] = useState({
            email: '',
            password: ''
        })
        const handleChange=(e)=>{
            const {name,value} = e.target;
            setLogin({...login,[name]:value})
        }
        const submitHandler = (e) => {
            e.preventDefault()
            console.log('adnan',login);
            dispatch(allActions.loginAction(login))
            history.push('/')
        }
    return (
    //     <form onSubmit={submitHandler}>
    //     <input type="text" id={styles.text} name="email" value={login.email} onChange={handleChange} className="form-control" placeholder="username" />
    //     <input type="password" id={styles.text} name="password" value={login.password} onChange={handleChange} className="form-control" placeholder="password" />
    //    <button type="submit">Login</button>
    //     </form>
            <section className={styles.section}>
            <div className='container'>
                <div className="d-flex justify-content-around h-100">
                    <div className={styles.card}>
                        <div className={styles.card_header}>
                            <h3>Sign In</h3>
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
                                    <input type="text" id={styles.text} name="email" value={login.email} onChange={handleChange} className="form-control" placeholder="username" />
                                    
                                </div>
                                <div className="input-group form-group"id={styles.input_group}>
                                    <div className={styles.input_group_prepend}>
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" id={styles.text} name="password" value={login.password} onChange={handleChange} className="form-control" placeholder="password" />
                                </div>
                                <div className="row align-items-center" id={styles.remember}>
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group">
                                    <button type="submit" value="Login" className="btn float-right" id={styles.login_btn}>login</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer" id={styles.card_footer}>
                            <div className="d-flex justify-content-center links" id={styles.links} >
                                Don't have an account?<Link to='/signup'>Sign Up</Link>
                                {/* Don't have an account?<a href="#">Sign Up</a> */}
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="#">Forgots your password?</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default LoginForm
