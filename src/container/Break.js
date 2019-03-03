import React, {Component} from "react";
import { connect } from "react-redux";

import { hendleBreakDecrease, hendleBreakIncrease } from '../redux/actions';
import { Break } from "../presentational/Break";

const mapDispatchToProps = dispatch => {
    return {
        onClickDecrease: function(){
            dispatch(hendleBreakDecrease())
        },
        onClickIncrease: function(){
            dispatch(hendleBreakIncrease())
        }
    }
}

const mapStateToProps = state => {
    return {
        breakLength: state.breakLength
    }
}

class BreakContainer extends Component  {
    render() {
        const {onClickDecrease, onClickIncrease, breakLength} = this.props;
        return (
    <Break onClickDecrease={onClickDecrease} onClickIncrease={onClickIncrease} length={breakLength}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreakContainer);