import React, { PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
// import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
// import CourseList from './CourseList';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(){
    this.props.dispatch(courseActions.createCourse(this.state.course)); // because the mapDispatchToProps not defined
    // debugger
    // alert(`Saving ${this.state.course.title}`);
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />
        
        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}



export default connect(mapStateToProps)(CoursesPage);

//   class CoursesPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);

//     this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
//   }

//   redirectToAddCoursePage() {
//     browserHistory.push('/course');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Courses</h1>
//         <input type="submit"
//                value="Add Course"
//                className="btn btn-primary"
//                onClick={this.redirectToAddCoursePage}/>

//         <CourseList courses={this.props.courses}/>
//       </div>
//     );
//   }
// }

// CoursesPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   courses: PropTypes.array.isRequired
// };


// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);