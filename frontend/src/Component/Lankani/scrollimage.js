import $ from "jquery";
import 'jquery-validation'

export default function ScrollImage() {

    
  function scroll(direction) {
    let far = ($(".image-container").width() / 2) * direction;
    let pos = $(".image-container").scrollLeft() + far;
    $(".image-container").animate({ scrollLeft: pos }, 1000);
  }


    return(
        <div className="main" style={{marginTop:'-15%', width:'100%', marginLeft:'-1%', marginBottom:'3%'}}>
        <div className="wrapper">
          <button className="prev" onClick={scroll.bind(null, -1)}>
            &#10094;
          </button>

          <div className="image-container" style={{width:'80%'}}>
            {/* <div className="image">
              <img src={require("./images/1.jpg")} alt="room" />
            </div> */}
            <div className="image">
              <img src={require("./images/2.jpg")} alt="room" />
            </div>
            <div className="image">
              <img src={require("./images/3.jpg")} alt="room" />
            </div>
            <div className="image">
              <img src={require("./images/4.jpg")} alt="room" />
            </div>
            <div className="image">
              <img src={require("./images/5.jpg")} alt="room" />
            </div>
          </div>
          <button className="next" onClick={scroll.bind(null, 1)}>
            &#10095;
          </button>
        </div>
      </div>
    )
}