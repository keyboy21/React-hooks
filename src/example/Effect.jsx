import React,{ useState, useEffect } from "react";
import axios from "axios";

const  Effect =()=> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [type, setType] = useState("users");


  useEffect(() => {
   async function res(){

      try {
        setLoading(true);
        await axios(`https://jsonplaceholder.typicode.com/${type}/?_limit=10`)
        .then((all) => (setData(all.data )))
        setLoading(false);
      } 
      catch(error) {
        setError(true)
        setError(error.message)
      }
      finally{
        setLoading(false);
      }
    }

    res()

  },[type]);



  if (loading) return <h1 className="text-center text-4xl text-yellow-600">Loading</h1>
 
  if (error) return<h1 className="text-4xl text-red-600 text-center">{error.message}</h1>
  
  return (
    <div className="text-center">
      <button
        onClick={() => setType("users")}
        className="p-2 bg-green-600 rounded-lg text-white"
        >
        User
      </button>
      <button
        onClick={() => setType("posts")}
        className="p-2 bg-green-600 rounded-lg text-white"
        >
        Post
      </button>
      <button
        onClick={() => setType("todos")}
        className="p-2 bg-green-600 rounded-lg text-white"
        >
        Todo
      </button>
      <p>{type}</p>

      <ul className="text-center">
       {data?.map((item) => <li key={item.id}>
       { type === "users" ? item?.name : null || type === "posts" ? item?.body : null || type === "todos" ? item?.title : null}</li>) }
      </ul>
    </div>
  );
}

export default Effect;
