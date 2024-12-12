import React, { useRef, useState } from 'react'
import { RiStickyNoteAddFill } from "react-icons/ri";
import { MdBrowserUpdated } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";



import { RiDeleteBin2Fill } from "react-icons/ri";
import { Button, TextField,Box, ListItem,List} from '@mui/material';
import { blue } from '@mui/material/colors';
 
export default function Assign() {
    let [item, setitem]=useState('')
    let [items, setitems]=useState([])
    let[toggle,settoggle]=useState({show:false,id:""})
    let editRef=useRef(null);

    let updateitem=(e)=>{
        setitem(e.target.value)
        
    }
    let additems=()=>{
        // e.preventDefault()                                                                                       
        setitems([...items,item])
    }
    let deleitem=(id)=>{
      let filteritem=items.filter((_,index)=>id!==index)
      setitems(filteritem);

    }
    let edititem=(id)=>{
     editRef.current.focus();
     settoggle({show:true,id})
     setitem(items[id])
    }
    let updateeitem=()=>{
      items[toggle.id]=item;
      setitems([...items])
      setitem(" ");
      settoggle({show:false})
    }
  return (
     <Box  style={{
         height:800,
         width:1600,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
         backgroundImage: 'url("https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg")',
          backgroundSize: 'contain'}}>
        <Box  sx={{
             height:600,
             width:700,
             display: 'flex',
             borderRadius: '5%',
             flexDirection:'column',
             backgroundImage: 'linear-gradient(rgba(0, 200, 255, 0.422),white)',
             boxShadow: '7px 7px 7px black',
             /* flex-wrap: wrap; */
             overflowX: 'auto'
        }
    }><h2 style={{textAlign:'center',color:'blue',textShadow:'3px 3px  3px 10px'}}> TO DO LIST</h2>
        <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
        {/* <input type="text" placeholder="Enter here"onChange={updateitem} className='demo' value={item} ref={editRef}/> */}
        <TextField
        placeholder='enter here'
        onChange={updateitem}
        sx={{backgroundColor:"white",margin:2,}}
        inputRef={editRef}
        style={{width:350}}
       value={item}
        />
         <Button
      onClick={additems}
      className='wow'
       sx={{backgroundColor:"rgba(0, 0, 255, 0.407)",height:55,width:130,display:'flex',alignItem:'center',justifyContent:'center',color:'white',fontSize:40,}}>
        <RiStickyNoteAddFill />
     </Button>
      {/* { <button onClick={additems} className='wow'><RiStickyNoteAddFill /></button>{toggle.show && <button className='upbtn'onClick={updateeitem}>Update</button>} } */}
      {toggle.show && 
      <Button onClick={updateeitem} className='upbtn' sx={{ height:55, 
        width:130,backgroundColor:'rgba(0, 0, 255, 0.407)',color:'white',fontSize:30, marginRight:1}}><MdBrowserUpdated /></Button>} 

      </Box>
      
      {
        items.map((i,index)=>{
  return(
    <Box sx={{
        height:100,
    width:700,
    display: 'flex',
    justifyContent: 'space-between',
    gap:60,
    backgroundImage: 'linear-gradient(rgba(18, 101, 124, 0.422),white)',
    boxShadow: '7px 7px 7px rgb(228, 220, 220)',
    fontSize: 20
    }}>
       <List  className='itemss'key={index}type='circle'>
        <ListItem >{i}
            {/* <button className='del' onClick={()=>{
          deleitem(index)
        }}><RiDeleteBin2Fill /></button> */}
        <Button
        onClick={()=>{deleitem(index)}}
        className='del'
        sx={{backgroundColor:" aquamarine",height:50,width:100,fontSize:20,'&:hover':{bgcolor:'rgb(35,128,182)',color:'white'}}}>
            <RiDeleteBin2Fill />
        </Button>
        {/* <button className='del' onClick={()=>{
          edititem(index)
        }}>Edit</button> */}
        <Button
        onClick={()=>{edititem(index)}}
        className='del'
        sx={{backgroundColor:" aquamarine" ,margin:2 ,height:50,width:100,fontSize:30,'&:hover':{bgcolor:'rgb(35,128,182)',color:'white'}}}>
            <MdModeEdit />

        </Button>

        </ListItem>
        
  
       </List>
      </Box>
  
        


  )
        })
      }
      </Box>
    </Box>
    
        
  )
}
