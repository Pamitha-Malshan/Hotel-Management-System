import './CSS/WelcomePage.css'

function Welcomepage(){
    return(
    <div className="welcomebackground">
                    
         <div className='welcomename'>
            <h1>Welcome</h1>
              <h1>Hotel green</h1>
              <h2>It's Time For Adventures & experiences</h2>
              <a href='/HomePage'>
              <button type='text'>Customer</button>
              </a>
              <a href='/LandingPage'>
              <button type='text'>Admin</button>
              </a>

         </div>
     
    </div>
    )
}

export default Welcomepage;
