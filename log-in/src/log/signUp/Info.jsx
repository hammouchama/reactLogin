import React ,{useState} from 'react'

export default function Info() {
    const [stat,setStat]=useState(0)
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")

  return (
    <div>{stat!==0 ?(
      <h1>Welcome {fname} {lname} </h1>
        ):(<>
       <h1>Sign Up for Free </h1>
            <form > <div className='Name'>
                <input type="text"  placeholder='First Name* ' required 
                  onChange={e=>{setfname(e.target.value)}}
                />
                <input type="text" placeholder='Last Name*' required
                  onChange={e=>{setlname(e.target.value)}}
                />
                </div>
                <input type="email" placeholder='Eamil *' required
                  
                />
                <input type="password" placeholder='Password' required
                 
                />
                <input type="submit" value="GET STARTED"  required
                 onClick={()=>{setStat(true)}}
                />     
            </form>
            </>
            )}
    </div>
  )
}
