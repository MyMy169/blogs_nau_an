import AboutMe from "./component/about/AboutMe";
import Blog from "./component/blog/Blog";
import Categories from "./component/categories/Categories";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import TopBar from "./component/topbar/TopBar";


function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Home/>
      <Footer/>
      <TopBar/>
      <Categories/>
      <Blog/>
      <AboutMe/>
      
      </>
    </div>
  );
}

export default App;
