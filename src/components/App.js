import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = {videos:[], selectedvideo:null };


  componentDidMount(){
    this.onTermSubmit('Reactjs');
  }

  onTermSubmit =  async (term) => {
    if(term!=="")
    {
      const response = await Youtube.get('/search',{
      params:{
        q:term
      }
      });

    this.setState({
      videos:response.data.items,
      selectedvideo:response.data.items[0]
    });
  }
};

  onVideoSelect=(video)=>{
    this.setState({selectedvideo:video});
  };

  render(){
   return(
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedvideo}/>
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}/>
          </div>
        </div>
      </div>
    </div>
 );
 }
}

export default App;
