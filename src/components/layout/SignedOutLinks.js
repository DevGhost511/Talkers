import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';     

class SignedOutLinks extends Component {
  render() {
    return (
      <div>
        <ul className="right">

          <li><NavLink to="/signup">Öğretmen Kayıt</NavLink></li>
          <li><NavLink to="/signupstudent">Kayıt</NavLink></li>
          <li><NavLink to="/signin">Login</NavLink></li>

        </ul>
      </div>
    );
  }
}

export default SignedOutLinks
//export default connect (null, mapDispacthToProps) (SignedOutLinks);