import {CommentService } from "../../../api/api"
import { add } from "./actions"

export const createComment = () => {
  return (dispatch, getStat) => {
    dispatch(add())
    CommentService.createComments(getStat())
  }
}