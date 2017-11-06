import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'
export const FETCH_POST = 'fetch_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=johnathan79717'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)
  return {
    payload: request,
    type: FETCH_POSTS,
  }
}

export function createPost(values, callback) {
  return {
    type: CREATE_POST,
    payload: axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(callback)
  }
}

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    payload: axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`),
  }
}

export function deletePost(id, callback) {
  axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(callback)
  return {
    type: DELETE_POST,
    payload: id,
  }
}
