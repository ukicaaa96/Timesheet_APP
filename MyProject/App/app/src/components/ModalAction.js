import React, { Component } from 'react'
import '../App.css'
import DateReturn from '../functions/DateReturn'
import axios from 'axios'
import Modal from 'react-modal'
import plusLogo from '../images/icon-plus.svg'


export default class ModalAction extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      data : [],
      task_date : '',
      task_name : '',
      task_hour : '',
      modalIsOpen: false,
      totalHours: 0
  };

   this.onChangeTask = this.onChangeTask.bind(this);
   this.onChangeHour = this.onChangeHour.bind(this);
   
  }

  //this onClick method send post request to server 
  handleSubmit = event => {
    const taskDate = DateReturn()    
    event.preventDefault();
      const tasksData = {
        task_date: taskDate,
        task_name: this.state.task_name,
        task_hour: parseInt(this.state.task_hour)
      };  

      axios.post('http://127.0.0.1:8000/db/tasksCreate/', tasksData ).then(res => {console.log(res.data);})   
                  this.setState({ task_name: '',
                                  task_hour: '',
                                  modalIsOpen: false
                                });

  }
  
  //this method set state for total hours
  setTotalHours(){
    const taskDate = DateReturn()
    axios.get('http://127.0.0.1:8000/db/getTasksDetail/'+taskDate).then(res => {
      const data = res.data;
      const total = data.reduce((prevValue, currentValue) => prevValue + currentValue.task_hour,0);
      this.setState({totalHours : total})

    })

  }

  // when user put something in input(task_name field)
  // this method use value from input and change state for task_name
  onChangeTask(e) {
    this.setState({ task_name: e.target.value });
    }

  // when user put something in input(task_hour field)
  // this method use value from input and change state for task_hour
  onChangeHour(e) {
    this.setState({ task_hour: e.target.value });
  }

  //This method open or close modal
  setModalState(bo){
    this.setState({ modalIsOpen : bo });
  }

    render() {
        //True or False
        const enabled =
        this.state.task_name.length > 0 &&
        this.state.task_hour.length > 0 && 
        parseInt(this.state.task_hour) +this.state.totalHours <= 24 &&
        String(this.state.task_hour)[0] !== '0';

        //change button color when button is disabled
        let btnDis = {background : 'gray'}
        if(enabled === true){
          btnDis = { background : '#ed5928'};
        }
        
        return (
          <>
          <span className="btn-icon">
              <img className="icon icon-plus js-modal-init" src = {plusLogo} alt="Add New Item" onClick = {() => { this.setModalState (true); this.setTotalHours();}} />
          </span>
             
     
             
              <Modal className = "modal" isOpen = {this.state.modalIsOpen} onRequestClose={() => this.setModalState (false)}>	
                
                <h2>Create a task:</h2>

                <form action ="">
            
                  <div className="field-wrap">
                    <label className="label" for="">Title:</label>
                    <input className="field"  id = "tit" name = "title" type="text"  value={this.state.task_name.value} 
                    onChange={this.onChangeTask} placeholder="Enter title here..." />
                  </div>

                  <div className="field-wrap">
                    <label className="label" for="">Hours:</label>
                    <input className="field" id = "num" name = "hours" type="number" value={this.state.task_hour.value}
                    onChange={this.onChangeHour} placeholder="Add hours here..." />						
                  </div>

                  <div className="btn-wrap align-right">
                    <input className="btn" id = "btn" type="submit" style = {btnDis} onClick = {this.handleSubmit} disabled = {!enabled} value="Create" />						
                  </div>
                
                </form>

              </Modal>
           
          </>
        )
    }

}


 



