import React from 'react'
import Admin from '../../components/adminDashboard/Admin'
import Manager from '../../components/managerDashboard/Manager'
import User from '../../components/userDashboard/User'
import styles from './home.module.css'

const Home = () => {

  // const user = useSelector(state=>state.loginReducer)
  const check = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
  console.log('user checking',check)
  const role = check?check.data.user.roles[0].name:''
  console.log('athar bhai',role)
  // console.log('fdfdf',user.userInfo.data.user.roles[0].name);
  // const a = user.userInfo.data.user.roles[0].name;
  // const role = user.userInf.data.user.roles[0].name
  // console.log('e',role)

    return (
        <div className={styles.home}>
          <div className="container">
            
            {role ==='manager' ? <Manager/>:''}
            {role ==='user' ? <User/>:''}
            {role === 'admin'? <Admin/>:'' }
            {/* <Manager /> */}
            
          </div>
        </div>
    )
}

export default Home
