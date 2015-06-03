import React from 'react';
import t from 'tcomb-form';
var Form = t.form.Form;
import ReactBootstrap from 'react-bootstrap';
var { Input, Button } = ReactBootstrap;

var FormBlog = t.struct({
	name: t.Str,
	email: t.Str,
	innlegg: t.Str
});

export default class Blog extends React.Component {
	
	constructor(props) {
  	super(props);
  	this.state = { name: [],
  				   email:"",
  				   innlegg:""
  	  }
    }	

    save(e) {
    	e.preventDefault();

    	// call getValue() to get the values of the form
    	var value = this.refs.form.getValue();

    	//if validation fails, value will be null
    	if (value) {
    		var newName = this.state.name.concat([value.name]);
    		this.setState({
    			name: newName,
    			email: value.email,
    			innlegg: value.innlegg
    			});
    	}
    		// value here is an instance of FormBlog
    		console.log(this.state.name);
    	
    }

	render() {
      return (
        <div>
            <Form 
             ref='form'
             type={FormBlog}/>
            <Button onClick= {this.save.bind(this)}> Save </Button>
        </div>
      	);
	}
}
