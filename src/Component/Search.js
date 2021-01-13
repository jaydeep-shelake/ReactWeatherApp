import React,{Component} from 'react'

class Search extends Component  {
      
      state ={term:''}
      onInputChage=(e)=>{
        const value = e.target.value;
        this.setState({term:value});
      }
      onSubmitForm=(e)=>{
        e.preventDefault();
        this.props.onSumbmitTerm(this.state.term);
        this.setState({term:''});
      }
   render(){
    return (
         <nav>
            <div className="nav-wrapper  white lighten-2">
            <div className="brand-logo text-black">LOGO</div>
            <form className=" container mx-auto" onSubmit={this.onSubmitForm}>
               <input id="search" type="text" 
               onChange={this.onInputChage} value={this.state.term}
               placeholder="Search the name of city"
               />
             </form>
            </div>
            
        </nav>
    );
  }
}

export default Search
