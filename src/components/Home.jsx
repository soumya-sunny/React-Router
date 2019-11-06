import React from 'react';
import { connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

 const Home =(props)=> {
const  handleClick =(e)=>{
   e.preventDefault();
   console.log(props);
   props.dispatch({type: 'INCREMENT'});
 }
   return (
     <React.Fragment>
       <div> Home </div>
       <button onClick={handleClick}>Increment</button>
       <label> {props.count} </label>
     </React.Fragment>
   );
 }
 // const mapDispathtoProps= (dispatch)=>{
 //   return {
 //     increment:dispatch(increment)
 //   }
 // }

 const mapStatetoProps = (state)=> {
   return {
     count: state.count
   };
 }

 export default  withRouter(connect(mapStatetoProps)(Home));
