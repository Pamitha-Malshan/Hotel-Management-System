import "../CSS/topbar.css";

function Topbar() {
  return (
    <div>
      <div className="row">

       <div className="col order-1">
           <h1 className="hotelname">Green Hotel</h1>
       </div>

        <div className="col order-2">
        <div className="item">
            <span class="material-icons-sharp">work</span>
              <div className="content">
                <h2>Working hours</h2>
                <small class="text-muted">24 hour services</small>
              </div>
          </div>
        </div>

        <div className="col order-3">
        <div className="item">
            <span class="material-icons-sharp">phone</span>
              <div className="content">
                <h2>Call Us</h2>
                <small class="text-muted">+119</small>
              </div>
          </div>
        </div>

        <div className="col order-4">
          <div className="item">
            <span class="material-icons-sharp">email</span>
              <div className="content">
                <h2>Mail Us</h2>
                <small class="text-muted">Hotelbooking@gmail.com</small>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
