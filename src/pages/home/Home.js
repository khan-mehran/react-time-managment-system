import React from 'react'
import { useHistory } from 'react-router'
import styles from './home.module.css'

const Home = () => {
  const history=useHistory()
  // const user = useSelector(state=>state.loginReducer)
  // const role = user.userInfo.data.user.roles[0].name
  // console.log('check here',role)
  
  const check = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null
  console.log('user checking',check)
  const role = check?check.data.user.roles[0].name:''

  // console.log('athar bhai',role)
  // console.log('fdfdf',user.userInfo.data.user.roles[0].name);
  // const a = user.userInfo.data.user.roles[0].name;
  // const role = user.userInf.data.user.roles[0].name
  // console.log('e',role)

    return (

        <div className={styles.home}>
          <div className="container">
            {role === 'admin'? history.push('/admin') :'' }  
            {role === 'manager'? history.push('/manager') :'' } 
            {role === 'user'? history.push('/user') :'' } 
          </div>
        </div>
    )
}

export default Home
