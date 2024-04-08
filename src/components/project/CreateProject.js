import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom';


class CreateProject extends Component {
  state = {
    baslik:'',
    icerik:''
  }
  
handleChange=(e)=>{
  this.setState({
    [e.target.id]:e.target.value
  })
  console.log(e)
}
handleSubmit=(e)=>{
  e.preventDefault();
  this.props.createProject(this.state);
  this.props.history.push('/');
  //console.log(this.state)
}

  render() {
    const {auth}=this.props;
    
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div onSubmit={this.handleSubmit} className="container">
        <form className="white">
          <h5 className="grey-text text-darken-4">Yazılım Oluştur</h5>
          <div className="input-field">
            <label htmlFor="baslik">Yazlım Başlık</label>
            <input type="text" id="baslik" onChange={this.handleChange} /> 
          </div>
          <div className="input-field">
            <label htmlFor="icerik">İçerik</label>
            <textarea id="icerik" cols="30" rows="10" className="metarialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-3 z-depth-2">Kaydet</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    createProject:(project)=>dispatch(createProject(project))
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (CreateProject)
