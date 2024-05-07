import React, { useState } from 'react'
import './styles/Commoncss.scss';
import Form from 'react-bootstrap/Form';
function Signin() {

  const [user,setUser]=useState({
    email:"",
    password:""
  })

  const [error,setError]=useState(false);

  const {email,password}=user;

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }

  const handleSubmit=()=>{

    if(email?.length===0 || password?.length===0)
      {
        setError(true);
      }

      if(email && password)
        {
          setError(false);
        }

  }
  return (
    <div className='main-sigin'>
<div className='inside-sigin'>
 <div className='box'>
<div className='text-center mt-3 mb-3 login-text'>
  Login
</div>
<div>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        name="email" value={email} onChange={handleChange}
        />
        <Form.Text className="text-muted">
          {error && email?.length<=0?"Email is Required":null}
        </Form.Text>
      </Form.Group>
</div>
<div>
<Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" 
        name="password" value={password} onChange={handleChange}
        
        />
        <Form.Text className="text-muted">
        {error && password?.length<=0?"Password is Required":null}

        </Form.Text>
      </Form.Group>
</div>
<div>
  <button className='login-btn' onClick={handleSubmit}>Login</button>
</div>
<div>

</div>
 </div>
</div>
    </div>
  )
}

export default Signin