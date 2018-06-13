import { getInitialData } from '../utils/api';
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { authedUser, setAuthedUser } from './authedUser'

const AUTHED_ID = 'dan_abramov'

function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, polls }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(polls))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}