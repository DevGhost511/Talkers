import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';


 const Navbar = (props) => {
   const {auth, profile}=props
   //console.log(auth)
   const links=auth.uid ? <SignInLinks profile={profile} /> : <SignedOutLinks />
    return (
    <nav className="nav-wrapper blue accent-1">
      <div className="container">

        <Link to='/' className="brand-logo"> VIPTALKERS </Link>
        
        {links}
      </div>
    </nav>
    )
}
const mapStateToProps=(state)=>{
//console.log(state);
  return{
    auth:state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps) (Navbar)