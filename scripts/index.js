import React from 'react';
import NavBar from './navbar';
import FrontPage from './frontpage';
import Blog from './blog';
import Shop from './shop';
import ProductPage from './productpage';

import Router from 'react-router';
var { Route, DefaultRoute, RouteHandler, Link } = Router;

import ReactBootstrap from 'react-bootstrap';
var {Button, Panel }=ReactBootstrap;

class SubComponent extends React.Component {

      render() {
        var message=this.props.imessage;
        return (
          <li > {message} <button onClick={this.props.onClick}> x</button> </li>
          );
      }
    };


class MessageBox extends React.Component {


      changeHandler() {
        var newVal = this.refs.rex.getValue();
        this.setState({
          val: newVal
        });
      }

      handleDelete(message) {
        this.state.messages.splice(this.state.messages.indexOf(message), 1);
        this.setState({messages: this.state.messages });
      }

      handleAdd(e){
        e.preventDefault();
        var text = this.refs.rex.getValue();
        var texts = this.state.messages.concat([text]);
        this.setState({
          messages: texts,
          val: " "
        });
      }

      constructor(props) {
        super(props);
        this.state = {messages: [],
                      val: " "
        };
      }


  render() {
          var Button = ReactBootstrap.Button;
          var that = this;
          var count=0;

          var subMessage = this.state.messages.map(function(imessage,index) {
            count++;
            return (<SubComponent onClick={that.handleDelete.bind(that, imessage)} imessage= {imessage} key={count}></SubComponent>
              );
          });
    return(

              <div>
              <ReactBootstrap.Input
                type="text"
                ref="rex"
                value={this.state.val}
                onChange={this.changeHandler.bind(this)}
                placeholder={this.props.defaultText}
                autofocus />
              <Button bsStyle='success' onClick={this.handleAdd.bind(this)}>Add</Button>
              <br/>
              <Button bsStyle='warning'>Warning</Button>
              <ul>
              { subMessage }
              </ul>
            </div> );

  }
};


class App extends React.Component{
    render() {
	  return (
      <div className="App">
         <NavBar />
         <div className='container'x>
           <RouteHandler {...this.props}/>
         </div>
        </div>
    )}
  };



var routes = (
  <Route handler={App} name='App' path='/'>
    <Route handler={Blog} name='Blog' path='/blog'/>
    <Route handler={FrontPage} name='FrontPage' path='/frontpage' />
    <Route handler={Shop} name='Shop' path='/shop' />
    <Route handler={ProductPage} name='ProductPage' path='/product/:id' />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('root'));
});

