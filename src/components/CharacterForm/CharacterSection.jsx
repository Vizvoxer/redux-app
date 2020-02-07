import React from 'react';
import { Field } from 'redux-form';

import Input from "../Input";
import Radio from "../Radio";


export default function CharacterSection() {
    return (
        <div>
            <Field name="name" component={Input} placeholder="Enter name" label="Enter name"/>
            <div>Gender: </div>
            <div>
                <Field name="gender" type="radio" component={Radio} value="Male" label="Male" />
                <Field name="gender" type="radio" component={Radio} value="Female" label="Female" />

            </div>
            <Field name="culture" component={Input} placeholder="Enter culture"/>
        </div>
    )
}
