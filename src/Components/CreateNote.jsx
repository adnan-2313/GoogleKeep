import React,{useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props) => {
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    const getValue = (event) =>{
        const{name,value} = event.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]:value,
            }
        })
    }
    const addNotes = () =>{
        props.passNote(note)
        setNote({
            title:"",
            content:"",
        });
    }
   
  return (
    <>
     <section className="main_div">
      <section className="main_note">
      <Button onClick={addNotes} variant="contained"  sx={{":hover":{
                bgcolor:"darkgoldenrod",color:"white"
            },marginTop:"-20px",marginLeft:"240px",backgroundColor:"white",borderRadius:"50px"}}> <AddIcon sx={{color:"black"}}></AddIcon> </Button>
        <form >
            <input name = "title" onChange={getValue} value={note.title}  type="text" placeholder='Title' autoComplete='off'/><br/>
            <textarea name="content" onChange={getValue} value={note.content} rows="10" column="20" placeholder='Write your note here...'></textarea>
        </form>
           
      </section>
      </section>
    </>
  )
}

export default CreateNote
