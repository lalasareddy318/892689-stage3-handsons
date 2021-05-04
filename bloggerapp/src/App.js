import logo from './logo.svg';
import './App.css';
import { Blog, posts } from './Components/BlogDetails';
import { Book, books } from "./Components/BookDetails";
import { Course, courses } from "./Components/CourseDetails";


function App() {
  return (
    <div>
      <table className="blogapp">
        <tr>
          <td className="hd"><h1> Course Details</h1></td>
          <td  className="hd"><h1>Book Details</h1></td>
          <td  className="hd"><h1>Blog Details</h1></td>
        </tr>
      <tr>
      <td><Course courses={courses}/></td>
      <td className="bd"><Book books={books}/></td>
      <td className="bd"><Blog posts={posts}/></td>
      </tr>
      </table>
      
    </div>
    
  );
}

export default App;
