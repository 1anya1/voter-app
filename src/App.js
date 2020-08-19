import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from './data'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      //our intial state is empty
      products:[],
    }
    
  }
  //setting an instance of state populating with data 
  componentDidMount(){
    this.setState({products:products})
  }
  

  render(){
    console.log(this.state.products)
    let product= this.state.products.map(product=>(
      <Individual
      key={product.id}
      id={product.id}
      description={product.description}
      title={product.title}
      url={product.urs}
      votes={product.votes}
      submitterAvatarUrl={product.submitterAvatarUrl}

       />

    ))
    return(
      <div class='main-container'>
        <h1>MY LIST</h1>
        <div>{product}</div>
      </div>
     
    )
  }
}

class Individual extends React.Component{
  constructor(props){
    super(props)
    
  }
  handleUpvote(){

  }
  render(){
    
    return(
      <div className='header'>
        <div className='title'>
          <h1>{this.props.title}</h1>
          <div className='profile-image'>
            <img  className='imageCenter' src={this.props.submitterAvatarUrl} /> 
          </div>
          
          <a>{this.props.url}</a>
          <h5 className='description'>{this.props.description}</h5>
          <div className='votes'>
          <button className='like-button'></button>
          <button className='dislike-button'></button>
          {this.props.votes}
        </div>
        </div>
        
        

      </div>
    )
  }

}

export default App;
