import React, { Fragment } from 'react';
import { FormSection } from 'redux-form';
import CharacterSection from "./CharacterSection";


export default function CharacterForm() {
    return (
        <Fragment>
            <FormSection name="user">
                <CharacterSection />
            </FormSection>
            <input type="submit" value="Send form"/>
        </Fragment>
    )
}
