import logo from './logo.svg';
import React, { Component } from 'react';
import Nav from './components/Nav.js';
import Header from './components/Header.js'
import homeContent from './components/homePage/homeContent.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        listBlogs: [],
        activeItem: {
          id: null,
          title: '',
          content: '',
        }
      }
      this.fetchTasks = this.fetchTasks.bind(this);
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks() {

    fetch('http://127.0.0.1:8000/blogs/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        listBlogs:data
      })
    )
  }
  render() {
    var blogs = this.state.listBlogs
    return (
      <div>
        <Nav/>
        <Header/>

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              {blogs.map(function(blog, index){
                return (
                  <div key = {index} class="post-preview">
                    <a href="#">
                    <h2 className="post-title">
                      {blog.title}
                    </h2>
                    <h3 className="post-subtitle">
                      {blog.content}
                    </h3>
                    </a>
                    <p className="post-meta">Posted on {blog.author} </p>
                  </div>
                )
              })}
              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts →</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        
          
        
        
      </div>
    );
  }
}


export default App;
