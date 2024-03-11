import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} className="width-img"></img>
      </div>
    );
  }
}

export default ImageComponent;
