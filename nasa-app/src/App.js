import React, { Component } from 'react';
import OutlinedTextFields from './views/components/searchField';
import TitlebarGridList from './views/components/titleGridList'
import './App.css';


const request = require('request');
const imageArray = [];

const getAPI = url => {
  request(url, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log("statusCode:", res && res.statusCode);
    let length =
      body.collection.items.length < 12 ? body.collection.items.length :12 ;
    for (let i = 0; i < length; i++) {
      if (body.collection.items[i].data[0].media_type === "image") {
        imageArray[i] = {
          img: body.collection.items[i].links[0].href,
          title: body.collection.items[i].data[0].title,
          description: body.collection
        };
      }
    }
    return imageArray;
  }, () =>{});
};




function createURL(searchParameter, imageToggle,audioToggle){

  if (typeof searchParameter !== 'string'){
    searchParameter = searchParameter.toString();
  }
  const urlRoot = 'https://images-api.nasa.gov/search?q='
  const urlMediaDescription = '&media_type='
  let mediaType;
  if (imageToggle && !audioToggle){
    mediaType = 'image'
  } else if (!imageToggle && audioToggle){
    mediaType = 'audio'
  } else {
    mediaType = 'image,audio'
  }

  let apiURL= urlRoot + searchParameter + urlMediaDescription + mediaType;
  return apiURL;
}


class App extends Component {
  state={
    noImages:true,
    images:[],
    searchInput:"",
    imagesChecked:true,
    audioChecked:false
  }
imageArray = this.state.images

componentDidMount=()=>{
   this.forceUpdate();
 }


handleCreateSearch = async()=>{
  let url = createURL(this.state.searchInput,this.state.imagesChecked,this.state.audioChecked)
  getAPI(url)
  this.setState(prevState=>({
    images: prevState.imageArray = imageArray,
    noImages: false
  }))
  
}

handleInputChange = (input)=>{
  this.setState({
    searchInput:input
  },this.handleCreateSearch)
}

handleToggle = (name,status)=>{
  this.setState({
    [name]: status
  }
  )};

  render() {
    return (
      <div className="App">
      <h1>
        NASA Image Search
      </h1>
        <OutlinedTextFields 
          handleChange = {this.handleInputChange}
          searchInput = {this.searchInput}
          imagesChecked = {this.state.imagesChecked}
          audioChecked = {this.state.audioChecked}
          handleToggle = {this.handleToggle}
          />
        {this.state.noImages? null:<TitlebarGridList
          tileData = {this.state.images} />}
      </div>
    );
  }
}

export default App;
