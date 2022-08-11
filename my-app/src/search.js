import React from "react";
import Image1 from "./video360.mp4";
// import "./Video.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diffx: 0,
      touchx: 0,
      duration: null,
      timeline: 0,
      screenwdith: window.innerWidth,
    };
  }

  vidRef = (elem) => {
    this.video = elem;
  };

  mainfunction = (e) => {
    let b = this.video.duration;
    let ashish = this.video.getBoundingClientRect();
    let a = e.clientX - ashish.left;
    a = ashish.width - a;
    this.setState({
      duration: b ^ 0,
      diffx: a,
    });
    let c = parseInt((a / ashish.width) * b);
    this.setState({
      duration: b ^ 0,
      timeline: Math.abs(c),
    });
    this.video.playbackRate = 0.5;
    this.video.currentTime = Math.abs(c);
  };

  touchmove = (e) => {
    this.mainfunction(e);
  };

  touchend = (e) => {
    this.video.play();
    this.setState({
      diffx: 0,
    });
  };

  _draging = (e) => {
    this.mainfunction(e);
  };
  _dragends = (e) => {
    this.video.play();
    this.setState({
      diffx: 0,
    });
  };

  render() {
    return (
      <div>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>

        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>

        <div>
          <div className="vidwrapper">
            <div className="vidcontainer">
              <video
                loop
                onTouchMove={this.touchmove}
                onTouchEnd={this.touchend}
                onMouseMove={this._draging}
                onMouseDown={this._dragends}
                ref={this.vidRef}
                type="video/mp4"
                src={Image1}
                muted
              ></video>{" "}
            </div>
          </div>
        </div>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
        <p>hi this is ahsinvfnalblav</p>
      </div>
    );
  }
}

export default Search;
