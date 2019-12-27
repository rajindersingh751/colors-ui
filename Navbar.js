import React, { Component } from 'react'
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton"; 
 
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import "./Navbar.css";


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {format: "hex" ,open : true}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt){
        this.setState({format: evt.target.value});
        this.props.handleChange(evt.target.value);
    
    }
    render() {
        return (
            <nav className="Navbar">
                <div className="logo">
                    <a href="#"> colorpicker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {this.props.level} </span>
                    <div className="slider">
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
                        />
                    </div>
                </div>
                <div className= "select-container">
                    <Select value ={this.state.format} onChange = {this.handleChange}> 
                        <MenuItem value="hex">Hex - #ffffff </MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,0.0) </MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin = {{vertical : "bottom", horizontal: "left"}}
                    open = {this.state.open}    
                    autoHideDuration = {2000}
                    message={<sapn id="msg-id">Format Changed!</sapn>}
                    ContentProps ={{
                        "aria-describedby": "msg-id"
                    }}
                    action = {[
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </nav>
        )
    }
}

export default Navbar;