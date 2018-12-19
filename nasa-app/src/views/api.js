const API ={
  
 search(searchParameter, imageToggle,videoToggle){
  
    if (typeof searchParameter !== 'string'){
      searchParameter = searchParameter.toString();
    }

    const urlRoot = 'https://images-api.nasa.gov/search?q='
    let mediaType;
    if (imageToggle && !videoToggle){
      mediaType = '&media_type=image'
    } else if (!imageToggle && videoToggle){
      mediaType = '&media_type=video'
    } else if (imageToggle && videoToggle) {
      mediaType = '&media_type=image,video'
    } else {
      mediaType = ''
    }
  
    let apiURL= urlRoot + searchParameter + mediaType;
    return fetch(apiURL)
            .then(response => response.json())
            .then(result =>{
                console.log(result);
                return result.collection.items
            })
  },
  dataReturn(dataID){
    if (typeof dataID === 'string'){
    const urlRoot = 'https://images-api.nasa.gov/asset/'+dataID;
    return fetch(urlRoot)
            .then(response =>response.json())
            .then(result =>{
              console.log(result.collection)
              return result.collection
            })
  }
}
}
export default API;