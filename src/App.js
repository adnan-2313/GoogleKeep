import React,{useState} from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateNote from './Components/CreateNote';
import Note from "./Components/Note"
const App = () => {
  const [item,setItem]= useState([]);
  const addEvent = (note)=>{
    if (note.title.trim() !== "" && note.content.trim() !== ""){
      setItem((prevData)=>{
          return[...prevData,note]
      })
    }
        
  }

  const onDelete = (id)=>{
    setItem((oldData)=>{
      return oldData.filter((currentdata,index)=>{
        return index !== id;
      })
    });
  };
  return (
    <>
      <Header/>
      <CreateNote passNote = {addEvent} />
       {item.map((value,index)=>{
          return<Note key={index} id={index} title={value.title} content={value.content} 
            deleteItem={onDelete}
          />
        })
       }
      <Footer/>

    </>
  )
}

export default App
