import {
  Art_LIST_FAIL,
  Art_LIST_SUCCESS,
  Art_LIST_REQUEST,
  Art_DETAILS_REQUEST,
  Art_DETAILS_SUCCESS,
  Art_DETAILS_FAIL,
} from "../constants/artConstants"
export const artListReducer = (state = { arts: [] }, action) => {
  switch (action.type) {
    case Art_LIST_REQUEST:
      return { loading: true, arts: [] }
    case Art_LIST_SUCCESS:
      return { loading: false, arts: action.payload }
    case Art_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const artDetailsReducer = (
  state = { art: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case Art_DETAILS_REQUEST:
      return { loading: true, ...state }
    case Art_DETAILS_SUCCESS:
      return { loading: false, art: action.payload }
    case Art_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
