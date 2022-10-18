import './CSS/ViewPage.css'

function Viewpage(){
    return(
    <div className="viewbackground">
                    
         <div className='viewename'>
             
              <h1>It's Time For Adventures & experiences
                <br/>
              <a href='/'>
              <button
                        type="button"
                        className="btn btn-warning"
                        id="get-button"
                      >Logout</button>
              </a></h1>
              </div>
              <div class="card-group">
        <div class="card" style={{
            width:"5%"
        }}>
          <a href="/search">
            <img
              src={require("./images/room1.jpg")}
              class="card-img-top"
              alt="incomeofroom"
              style={{width:'90%', marginLeft:'5%'}}
            />
          </a>

          <div class="card-body">
            <h1 class="card-title">Rooms</h1>
          </div>
        </div>

        <div class="card">
          <a href="searchfood">
            <img
              src={require("./images/food1.jpg")}
              class="card-img-top"
              alt="incomeoffood"
              style={{width:'90%', marginLeft:'5%'}}
            />
          </a>
          <div class="card-body">
            <h1 class="card-title">Foods</h1>
          </div>
        </div>
    

         </div>
     
    </div>
    )
}

export default Viewpage;