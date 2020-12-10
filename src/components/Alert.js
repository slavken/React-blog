import React from 'react';
import PropTypes from 'prop-types';

export const Alert = props => (
    <div 
        className={`alert alert-${props.alert.type || 'secondary'} alert-dismissible`}
        role="alert">
        {props.alert.text}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
);

Alert.propTypes = {
    alert: PropTypes.object
}