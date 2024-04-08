import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {signUp} from '../../store/actions/authActions'
import './sign.css'
import NumberFormat from 'react-number-format';

export class SignUp extends Component {
  state = {
    email:'',
    password:'',
    confirm:'',
    isim:'',
    soyisim:'',
    male:'',
    female:'',
    birthday:'',
    username:'',
    mobile:'',
    skype:'',
    introduction:'',
    teacher:true
  }


handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
  //console.log(e.target.id)
}

handleSubmit=(e)=>{
  e.preventDefault();
  const { password, confirm } = this.state;
  if (password !== confirm) {
    alert("Passwords don't match");
  } else {
    this.props.signUp(this.state);
  }
}

  render() {
    
    const {authError,auth}=this.props;
    if(auth.uid) return <Redirect to='/' />
   
    return (
      <div onSubmit={this.handleSubmit} className="container">
        <form className="white">
          <h5 className="red-text text-darken-4">Sign Up</h5>
          <div className="input-field col s12">
            <label htmlFor="email">Email</label>
            <input className="validate" type="email" id="email" onChange={this.handleChange} required /> 
            <span className="helper-text" data-error="Hatalı giriş yaptınız." data-success="right"></span>
          </div>
          <div className="row">
            <div className="input-field col s6" required >
              <label htmlFor="password">Parola (En az 6 karakter olmalı, Büyük, küçük ve özel karakter içermeli.)</label>
              <input className="validate" type="password" 
              id="password" name="password" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
              onChange={this.handleChange} required /> 
            </div>
            <div className="input-field col s6" required >
              <label htmlFor="confirm">Tekrar Parola</label>
              <input className="validate" type="password" 
              id="confirm" name="confirm" pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
              onChange={this.handleChange} required /> 
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="isim">İsim</label>
              <input type="text" id="isim" onChange={this.handleChange} /> 
            </div> 
            <div className="input-field col s6">
              <label htmlFor="soyisim">Soyisim</label>
              <input type="text" id="soyisim" onChange={this.handleChange}  /> 
            </div>
          </div>
          <div className="row">
            <div className="grey-text col s6">
              <label className="black-text" htmlFor="sex">Cinsiyet  </label>
              <div className="row"></div>
              <div className="gender-male">
                <label htmlFor="male">
                  <input className="with-gap" name="gender" type="radio" id="male"  onChange={this.handleChange}/>
                  <span className="black-text">Erkek</span>
                </label>
              </div>
              <div className="gender-female">
                <label for="female">
                  <input className="with-gap" name="gender" type="radio" id="female"  onChange={this.handleChange}/>
                  <span className="black-text">Kadın </span>
                </label>
              </div>
            </div>
            <div className="col s6">
            <label className="black-text">Doğum Tarihi</label>
            <br/>
              <input type="date" id="birthday" className="datepicker" onChange={this.handleChange}  />
            </div>
          </div>
          <div className="input-field col s12">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input type="text" id="username" onChange={this.handleChange}  /> 
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="skype">SkypeID</label>
              <input type="text" id="skype" onChange={this.handleChange}  /> 
            </div>
            <div className="input-field col s6">
              <NumberFormat id="mobile"  format="+90 (###) ###-####" mask="_" onChange={this.handleChange} />
              <input id="mobile" type="tel" className="validate" pattern="[0-9]*" maxLength="10" placeholder="(xxx) xxx-xxxx" onChange={this.handleChange}/>
              <label for="mobile">Telephone Numarası</label>
            </div>
          </div>
          <div className="row">
              <div className="input-field col s12">
                <textarea id="introduction" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                <label for="textarea1">Kendi tanıtımınız.</label>
              </div>
          </div>
          <div className="input-field">
            <button className="btn red btn-register lighten-3 z-depth-2">Kayıt</button>
            <div className="red-text center">
              {{authError} ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispacthToProps=(dispatch)=>{
  return{
    signUp:(yeni)=>dispatch(signUp(yeni))
  }
}

const mapStateToProps=(state)=>{
  return{
    authError:state.auth.authError,
    auth:state.firebase.auth
  }
}


export default connect(mapStateToProps,mapDispacthToProps) (SignUp)
