import { isRequired, combineValidators } from 'revalidate'


export const formValidator = combineValidators({
    user: {
        name: isRequired("FirstName"),
    }
});
