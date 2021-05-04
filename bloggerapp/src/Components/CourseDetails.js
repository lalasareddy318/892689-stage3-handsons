import React from 'react'

export function Course(props) {

    const coursedet = props.courses.map((course) =>
    <div key={course.id}>
      <h1>{course.cname}</h1>
      <h4>{course.startdate}</h4>
     </div>
  );
    return (
        <div>
        
        {coursedet}
      </div>
   
    );
  }
  export const courses =[
    {id:1001,cname:'Angular',startdate:'4/5/2021'},
    {id:1002,cname:'React',startdate:'6/3/20201'}
  ]; 
 