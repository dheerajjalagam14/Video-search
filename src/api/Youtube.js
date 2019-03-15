import axios from 'axios';


const KEY = 'AIzaSyA4hDJ3J6RKqh6tXXPSXjiRxDU58yZjpjo' ;


export default axios.create({
  baseURL : 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults:'5',
    key:KEY,
  }
})
