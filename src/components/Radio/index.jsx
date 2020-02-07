import React, { Fragment } from 'react';
import {withInputRender} from "../../hocs/withInputRenderer/withInputRender";
import './styles.css';

 function Radio (props){
    return (
        <Fragment>
            <input
                {...props}
                type="radio"
                className="hiddenInput"
            />
            <div className="check" >
                <div />
            </div>
        </Fragment>
    );
}

export default withInputRender(Radio);
