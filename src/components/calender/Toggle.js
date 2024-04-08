import React from 'react'
import './calender.css'
import { createSlot, updateSlot } from '../../store/actions/slotActions'
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Toggle extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      status:'AÇIK',
      sdate:'',
      stime:'',
      stype:'1v1',
    };
    this.state.sdate = this.props.sdate;
    this.state.stime = this.props.stime;
    this.handleClick = this.handleClick.bind(this);
    
  } 

  loadInitialValues=(props) => {
    //console.log(props);
      //const id=props.match.params.id
      const {project,auth}=props;
      
    
      if(project){
    }
  }

	handleClick(e) {

    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    this.state.isToggleOn ? this.setState({status:"KAPALI"}) :  this.setState({status:'AÇIK'}) // this.state.status='KAPALI': this.state.status='AÇIK';
    //this.state.uid = this.state.sdate + this.state.stime
    this.state.isToggleOn ? this.props.updateSlot(this.state) : this.props.createSlot(this.state) 
    console.log(this.state);
	}

  render() {

    return (
      
      <button 
      style={{background: this.state.isToggleOn ? '#4dff4d' : '#ffff80', width: '100%', height: '20px', 
      justifyContent:'center', verticalalign:'middle', fontsize:'8px', padding:'0 0 0 0', margin: '0 0 0 0', 
      border:'none', color:'black', 
      fontface:'verdana' }}  
      onClick={this.handleClick}
      src={this.props.sdate}>
        {this.state.isToggleOn ? 'AÇIK' : 'KAPALI'}
      </button>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log(state)
  const id=state.firebase.auth.uid;
  console.log(state.firebase.auth.uid)
  const slots=state.firestore.data.slots;
  const slot=slots ? slots[id] : null;
  console.log(slot)
  console.log(slots)
  return{
      slot:slot,
      auth:state.firebase.auth
  }
}


const mapDispatchToProps=(dispatch)=>{
  return {
    createSlot:(slot)=>dispatch(createSlot(slot)),
    updateSlot:(slot)=>dispatch(updateSlot(slot))

  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([
  {collection:'slots'}
])) (Toggle)
