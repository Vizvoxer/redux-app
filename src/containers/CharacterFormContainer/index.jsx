import React from 'react';
import {formValidator} from "./validators";
import CharacterForm from "../../components/CharacterForm";
import {reduxForm} from "redux-form";

function CharacterFormContainer({ handleSubmit, ...props}) {
    return (
        <form onSubmit={handleSubmit}>
            <CharacterForm {...props}/>
        </form>
    )
}

export default reduxForm({
    form: 'character',
    validate: formValidator,
})(CharacterFormContainer)
