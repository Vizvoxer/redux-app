import React from 'react';
import classNames from 'classnames';

import './styles.css';

const isInlineLabel = inputType => inputType === 'radio' || inputType === 'checkbox';

export const withInputRender = Wrapper => ({input, label, meta, ...props}) => {
        return (
            <label className={classNames({
                label: isInlineLabel(props.type),
            })}>
                    {label}
                    <Wrapper {...input} {...props} />
                    {meta.touched && meta.error && <span>{ meta.error }</span>}
            </label>
        );
};
