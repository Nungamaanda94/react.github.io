import React, {Component} from "react";
//import React from "react";

export default class Users extends Component {

    state = {


        age : 12,
        _name : 'Maanda',
        surname : 'Nunga',
        location: 'Seshego C'


    }

    

    render(){

        return (
            <div className = "Maanda">
                <h1>{this.state.push.age} {this.state.surname} {this.state.push._name} {this.state.push.location}</h1>
                <h3> { this.getSurname.message} </h3>
            
            </div>
        )
    }

    getSurname()
    {
      
         let message = '';

        if (this.state.age >= 18) {

           return message = "You are old enough to code"
           
            
        }
        else{
           return message = "You are not old enough to code"
        }

    }
        


            

    
}
