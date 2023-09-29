import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Content from "./pages/content";
import useFetch from "./hooks/useFetch";

export default function App() {

  let {loading, data, error} =useFetch('http://localhost:1337/api/blogs?populate=*')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home blogs={data?data:""}/>}></Route>
        <Route path="/blog/:id" element={<Content blogs={data?data:""}/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}
