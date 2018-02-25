import constants from '../constants/app-constants'
import dispatcher from '../dispatcher/dispatcher';

export let incrementActions = {
    incrementCount: () => {
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        })
    }
}