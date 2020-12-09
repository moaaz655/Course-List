import React , {Component} from 'react';

class CourseList extends Component {

    
    // message = (props) => {
    //     const {courses} = this.state;
    //     let length = courses.length;
    //  this.state.courses.length  > 0 ? courseList : <p>There Is No Courses To Show</p> 
    // }

    state = {
        isEdit : false
    }

    // render Course Item
    renderCourse = () => {
        return (
                <li>
                    <span>{this.props.details.name}</span>
                    <button onClick={() => {this.toggleState()}}>Edit Course</button>
                    <button onClick={() => {this.props.deleteCourse(this.props.index)} }>Delete Course</button>
                </li>
        )
    }

    // update Course Item
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleState();
    }

    // render Update Form
    renderUpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details.name} />
                <button>Update Course</button>
            </form>
        )
    }

    // toggleState
    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }

    render() {
        let {isEdit} = this.state;
        return (
            <React.Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse() }
            </React.Fragment>
        )
    }
}

export default CourseList;