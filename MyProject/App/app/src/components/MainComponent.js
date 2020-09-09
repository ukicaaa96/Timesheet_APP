import React, { Component } from 'react'
import axios from 'axios'
import DateReturn from '../functions/DateReturn'


class MainComponent extends Component {

          constructor(props) {
          super(props);
          this.state = {
            data: []                  
          };        
        }

       //Getting total hours from data
        getTotalHours(){
          const total = this.state.data.reduce((prevValue, currentValue) => prevValue + currentValue.task_hour,0);
          return total;         
        }

        //When create component this method will display data from database for given date in url
        componentDidMount() {
          const date = DateReturn()
          axios.get('http://127.0.0.1:8000/db/getTasksDetail/'+date).then(res => {
              const data = res.data;
              this.setState({ data });
            })
        }

        //If we have a new task in database this method will add new this task with others
         componentDidUpdate(){
             const date = DateReturn()
             axios.get('http://127.0.0.1:8000/db/getTasksDetail/'+date)
             .then(res => {
               const data = res.data;
               this.setState({ data });
             })
         }
   
    render() { 
      
      //Passes through the data and creates an element for each object
      var elements = this.state.data.map(function (fields){
      
            return (
            
                <div className="item-row">
                  <div className="check-flag">

                    <span className="small-text-label">TITLE</span>
                    <span className="small-text-label hours">HOURS</span>
                    <span className="check-flag-label">{fields.task_name}</span>
                    <span className="hours-box">{fields.task_hour}</span>

                  </div>
                </div>
            )
        });
    
        return (
          <>    
          <div>{elements}</div>
          <div className="total align-right">
            <label for="" className="total-label">Total:</label>
            <input className="total-input" type="text" value= {this.getTotalHours()} readonly />
          </div>
          </>     
        )
      
    }
   
}



export default MainComponent;






