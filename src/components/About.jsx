import React from 'react';
import Modal from './Modal.jsx'
 // const About =()=>
 class About extends React.Component{
   constructor (props){
     super(props);
     this.state= {
       showModel:false
     };
   }
    showModel = ()=> {
     console.log("clicked");
     this.setState({showModel:true})
   }
   hideModal =()=> {
     this.setState({showModel:false});
   }
   render () {
   return (
     <React.Fragment>
       <div id ='about'> About </div>
       <button onClick={this.showModel}>Know More</button>
       <Modal root={document.body} open={this.state.showModel} close={this.hideModal}/>
     </React.Fragment>
   );
 }
 }

 export default About;
