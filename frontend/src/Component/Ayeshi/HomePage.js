import './CSS/HomePage.css'

function Homepage(){
    return(
    <div className="homebackground">
                    
         <div className='homename'>
              <h1>Hotel green</h1>
              <h2>It's Time For Adventures & experiences</h2>
              <a href='/CustomerSignin'>
              <button type='text'>Sign in</button>
              </a>
              <a href='/CustomerSignup'>
              <button type='text'>Sign Up</button>
              </a>

         </div>
     
    </div>
    )
}

export default Homepage;
