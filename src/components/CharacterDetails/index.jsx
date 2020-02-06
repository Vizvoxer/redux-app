import React from 'react';
import PropTypes from 'prop-types';

export default function CharacterDetails({character, selected}) {
    return (
        <div>
            <h1>Profile of: {character.name}</h1>
            {!!selected && <h2>This character is selected</h2>}
            <ul>
                <li>Gender: {character.gender}</li>
                <li>Culture: {character.culture}</li>
            </ul>
        </div>
    );
}

CharacterDetails.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string,
        gender: PropTypes.string,
        culture: PropTypes.string,
    }).isRequired,
    selected: PropTypes.bool.isRequired,
};
