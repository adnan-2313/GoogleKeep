import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) => {
  const deleteItem = ()=>{
    props.deleteItem(props.id);
  }
  return (
    <> 
      <section className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button onClick={deleteItem} variant="contained" sx={{":hover":{
                bgcolor:"darkgoldenrod",color:"white"
            },marginTop:"40px",marginLeft:"210px",size:"20px",backgroundColor:"red",borderRadius:"50px",minHeight:"5px",minWidth:"5px"}}> <DeleteIcon/></Button>
       
      </section>
    </>
  )
}

export default Note
