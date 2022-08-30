import '../CSS/LandingPage.css'

function Landingpage(){
    return(
    <div className="background">
                    <div className='star'>
                        <span class="material-icons-sharp">star_half</span>
                        <span class="material-icons-sharp">star_half</span>
                        <span class="material-icons-sharp">star_half</span>
                        <span class="material-icons-sharp">star_half</span>
                        <span class="material-icons-sharp">star_half</span>
                    </div>
         <div className='name'>
              <h1>Hotel green</h1>
              <h2>It's Time For Adventures & experiences</h2>
              <a href='/Signin'>
              <button type='text'>Sign in</button>
              </a>
              <a href='/Register'>
              <button type='text'>Sign Up</button>
              </a>

         </div>
     
    </div>
    )
}

export default Landingpage;
