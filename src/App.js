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
    this.handleDislike=this.handleDislike.bind(this)
    this.handleLike=this.handleLike.bind(this)
   
    
  }
  //setting an instance of state populating with data 
  componentDidMount(){
    this.setState({products:products})
  }

  handleDislike(id){
    // console.log('this is the id ;) ' +id)
    let updatedProducts= this.state.products.map(item=>{
      if(item.id===id){
        return Object.assign({}, item, {
          votes: item.votes-1
        })
      } else{
        return item
      }
    })
    this.setState({products: updatedProducts})
  }


  
  handleLike(id){
    // console.log(` this is me likeing `+id)
   
    let updatedProducts= this.state.products.map(item=>{
      if(item.id===id){
        return Object.assign({}, item, {
          votes:item.votes+1
        })
      } else { return item}
    })
      this.setState({products: updatedProducts})
  }

  render(){
    const products =this.state.products.sort((a,b)=>b.votes-a.votes)
    console.log(products)
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
      dislike={this.handleDislike}
      like={this.handleLike}
     
       />

    ))
    return(
      <div className='main-container'>
        <h1 className='titel'>MY ANIMALS</h1>
        <div className='cards'>{product}</div>
      </div>
     
    )
  }
}

class Individual extends React.Component{
  constructor(props){
    super(props)

    this.buttonDislike=this.buttonDislike.bind(this)
    this.buttonLike=this.buttonLike.bind(this)
  }
  
buttonDislike(){
  this.props.dislike(this.props.id)
}
buttonLike(){
  this.props.like(this.props.id)
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
          <h3 className='description'>{this.props.description}</h3>
          <div className='votes'>
          <button  onClick={this.buttonLike} className='like-button' />
          <button onClick={this.buttonDislike} className='dislike-button'></button>
          <h3>{this.props.votes}</h3>
        </div>
        </div>
        
        

      </div>
    )
  }

}

export default App;
