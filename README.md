This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

NASA Image Search TECHTEST

Brief: Create an app using the NASA Image and Audio API.


Aims:

1- Using React/Material UI, create a front end that has a search facility, with options to select Images/Audio.
    - Lift the state up to the main app component from the input and the toggle switches. (DONE)
2- Using Node, create the back end functionality to parse the JSON that is returned by the NASA API, and then
    render images on the front end using a map. (DONE)
3- Ensure there is functionality for all HTTPS codes that can be returned by the API (within reason) (optional but ideal)
4- When an image is clicked on, the full image is shown along with a description (this can be taken from the API) (DONE)
5- Create a function that can return other media than Images (audio/video)

Step 5 - I have method that will return the requested JSON using the nasa_id of the required asset. I am currently attempting to map over the state where media_type is video so I can render a section that contains the videos.


