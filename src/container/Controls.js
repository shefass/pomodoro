import React, {Component} from "react";
import { connect } from "react-redux";

import { hendleStartPause, hendleReset } from '../redux/actions';

import { Controls } from "../presentational/Controls";

const mapDispatchToProps = dispatch => {
    return {
        onClickStartPause: function(){
            dispatch(hendleStartPause())
        },
        onClickReset: function(){
            dispatch(hendleReset())
        }
    }
}


class ControlsContainer extends Component {
    
    

    render(){
        const { onClickReset, onClickStartPause} = this.props;
        
        return (
            <Controls onClickReset={onClickReset} onClickStartPause={onClickStartPause}/>
        )
    }

}

export default connect(null, mapDispatchToProps)(ControlsContainer);