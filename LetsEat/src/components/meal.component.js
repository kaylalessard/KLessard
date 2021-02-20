import React, { Component } from 'react';
import axios from 'axios';

export default class Meal extends Component {

    constructor(props) {
        super(props);
        this.state = { mealCollection: [] };

        this.randomMeal = this.randomMeal.bind(this);
        this.handleClick = this.handleClick.bind(this);
  }

    //get database collection from localhost 
    componentDidMount() {
        axios.get('http://localhost:4000/meal')
            .then(res => {
                this.setState({ mealCollection: res.data },()=>{
                    // handle click function here, so that a random meal is shown on initial load
                    this.handleClick();
                  })
            })
            //handle errors
            .catch(function (error) {
                console.log(error);
            })
    
    }
    //Use Math.floor to find random item in collection
    randomMeal() {
        const randomNumber = Math.floor(Math.random() * this.state.mealCollection.length);
        return this.state.mealCollection[randomNumber];
      }
    //handleClick function to select random meal
      handleClick() {
        const oneRandomMeal = this.randomMeal();
        this.setState({
          meal: oneRandomMeal.meal
        })
      }
    
 
    render() {
        const { mealCollection } = this.state;
        return (
            
        <div className="content">
        <br>
        </br>
        <p>
          {this.state.meal}
          
        </p>
        <br>
        </br>
        <Buttons handleClick={this.handleClick}/>
            </div>
        )
    }
    

}
//button class; button click produces random meal from collection
class Buttons extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return(
        <div className="content">
              <div class="center">
          <button className="button" onClick={this.props.handleClick}>
            Pick a New Random Meal
          </button>
          </div>
        </div> 
      )
    }
  }
