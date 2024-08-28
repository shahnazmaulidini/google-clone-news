import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import axios from "axios";

function App() {
  //const [count, setCount] = useState(0)
const [news,setNews]= useState([]);
console.log('news: ', news);

useEffect(()=>{
  getNews()
},[]
)

const getNews = async()=>{
  try {
    const response = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=fbe9f20b82ea45a7955829ddba1e89ed');
    setNews(response.data.articles);
  } catch (error){
    console.error(error);
  }
}

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <Menubar/>
      <div className="pt-5 pb-28">
        <div className="bg-white p-4 rounded-lg mx-28">
          {news.map((item,index) => (
            <a key={index} href={item?.url} target="_blank">
            <div key={index} className="flex space-x-4 p-4 border-b border-gray-300">
              <img src={item?.urlToImage} all={item?.tittle} className="w-24 h-24 object-cover rounded"/>
              <div>
                <h3 className="font-semibold text-lg">{item?.title}</h3>
                <p className="text-sm text-gray-600">{item?.description}</p>
                </div>
              </div>
              </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;

