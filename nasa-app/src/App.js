import React, { Component } from 'react';
import OutlinedTextFields from './views/components/searchField';
import TitlebarGridList from './views/components/titleGridList';
import Loading from './views/components/loading'
import CurrentImageModal from './views/components/modal'
import './App.css';
import API from './views/api'
// import VideoGridList from './views/components/videoGridList';


class App extends Component {
  constructor(){
    super();
  
  this.state={
    title:"NASA Image & Video Search",
    loading:false,
    images:[],
    searchInput:"",
    imagesChecked:true,
    imageDisplayed:false,
    videos:[],
    videoChecked:false,
    videoLoading:false,
    videoDisplayed:false
  }
}
componentDidMount=()=>{
   this.forceUpdate();
 }
handleImageClick = (input)=>{
  let json = JSON.parse(input)
  let dataID = json.data[0].nasa_id;
  let image = json.links[0].href;
  let imageDescription = json.data[0].description;
  let imageTitle = json.data[0].title;
  let imageDate = json.data[0].date_created;
  this.setState({
    imageDisplayed:true,
    currentImage:[dataID,image,imageDescription,imageTitle,imageDate]
  })
}
handleClose = ()=>{
  this.setState({
    imageDisplayed: false
  })
}

handleMedia = (dataID) =>{ //returns data based on nasa data ID
  API.dataReturn(dataID)
    .then(videos =>{
      this.setState({
      videos
      })
    })
}

handleCreateSearch = ()=>{
  this.setState({
    loading:true,
    // videoLoading:true,
  })
 API.search(this.state.searchInput,this.state.imagesChecked,this.state.videoChecked)
    .then(images =>{
      this.setState({
        images,
        loading: false,
      }) 
      // this.state.images.map(image =>{
      //   this.setState(prevState =>{
      //     prevState.videos.push(API.dataReturn(image.data[0].nasa_id))
      //   })
      // })
      // .then(
      //   this.setState({
      //     videoLoading:false
      //   })
      // )
    })
}


handleInputChange = (input)=>{
  this.setState({
    searchInput:input
  })
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
        {this.state.title}
      </h1>
        <OutlinedTextFields 
          handleChange = {this.handleInputChange}
          handleSubmit = {this.handleCreateSearch}
          searchInput = {this.searchInput}
          imagesChecked = {this.state.imagesChecked}
          videoChecked = {this.state.videoChecked}
          handleToggle = {this.handleToggle}
          />
        {this.state.loading? 
        <Loading />
        : !this.state.imageDisplayed?
        <TitlebarGridList
          tileData = {this.state.images}
          handleImageClick = {this.handleImageClick} />
          : null}
        {this.state.imageDisplayed?
        <CurrentImageModal 
          handleClose = {this.handleClose}
          currentImage = {this.state.currentImage}/> 
          : null}
        {/* {this.state.videoLoading?
        <Loading />:
        !this.state.videoDisplayed?
        <VideoGridList
          tileData = {this.state.images}
          videoData = {this.state.videos}
          handleMedia = {this.handleMedia}/> 
          : null} */}
      </div>
    )
  }
}


export default App;
