import axios from "axios"
import {
  Art_LIST_FAIL,
  Art_LIST_SUCCESS,
  Art_LIST_REQUEST,
  Art_DETAILS_REQUEST,
  Art_DETAILS_SUCCESS,
  Art_DETAILS_FAIL,
} from "../constants/artConstants"

export const listArts = () => async (dispatch) => {
  try {
    dispatch({ type: Art_LIST_REQUEST })

    const { data } = await axios.get("/api/artWorks")
    dispatch({
      type: Art_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: Art_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listArtsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: Art_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/artWorks/${id}`)
    dispatch({
      type: Art_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: Art_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
