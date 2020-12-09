import React , {Component} from 'react';
import './App.css';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

class App extends Component {

  state = {
    courses : [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'jQuery'}
    ] ,
    current : '',
    error : ''
  }

  // updateCourse
  updateCourse = (e) => {
    this.setState({
      current : e.target.value
    })
  }

  // addCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    if( current !== '' ) {
      courses.push({name: current})
      this.setState({
      courses,
      current: ''
    })
  } else {
    this.setState({
      error : 'Please enter the course name...'
    })
  }
  }

  // deleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }

  // editCourse
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }



  render() {
    const {courses} = this.state;
    const courseList = courses.map( (course, index) => {
      return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })
    return (
      <section className="App">
          <h2>Add Courses</h2>
          <CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current} error={this.state.error} />
          {courses.length  > 0 ? <ul>
            {courseList}
          </ul> : <p>There Is No Courses To Show</p>}
      </section>
    );
  }
}

export default App;