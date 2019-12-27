import React, { Component } from 'react'
import "./ColorBox.css";
import {CopyToClipboard} from "react-copy-to-clipboard";

class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state= {copied: false};
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy(){
      this.setState({copied:true}, ()=>{
          setTimeout( ()=>
           this.setState({copied:false}), 1000);
      });
    }
    render() {
        const {name,background} = this.props;
        const copied = this.state.copied;
        return (
            <CopyToClipboard text = {background} onCopy = {this.handleCopy}>
                <div style = {{ background}} className= "ColorBox">
                    <div  style={{background}} className={`Copy-overlay ${copied && "show"}`}/>
                    <div  className={`Copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more">More</span>
                 </div>
            </CopyToClipboard>     
        )
    }
}

export default ColorBox;