import React from 'react';
import {NavLink} from 'react-router-dom';     
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignInLinks=(props)=>  {
  return (
    <div>
      <ul className="right">
        
        <li><NavLink to="/">Ana Sayfa</NavLink></li>
        <li><NavLink to="/create">İletişim</NavLink></li>
        <li><NavLink to="/calender">Takvim</NavLink></li>
        <li><NavLink to="/">SSS</NavLink></li>
        
        <li><a onClick={props.signOut}> Log Out</a></li>
        <li><NavLink to="/" className="btn-floating btn-large waves-effect waves-light blue">{props.profile.initials}</NavLink></li>

      </ul>
    </div>
  );
  
}


const mapDispacthToProps=(dispatch)=>{
  return{
    signOut:()=>dispatch(signOut())
  }
}


export default connect(null, mapDispacthToProps) (SignInLinks);
