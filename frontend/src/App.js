import React, { Component } from 'react';
import PostsContainer from './containers/posts/PostsContainer'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        Hello World
        {/* Add Navigation Component - Has Search Bar that on click directs to Search Container */}
        {/* Add Hero Title Component - Probably a Bootstrap component? */}
        <PostsContainer posts={this.props.posts} />
      </div>
      )
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchPosts: () => dispatch(fetchPosts()) }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)