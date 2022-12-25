import { FETCH_ALL, CREATE, UPDATE, DELETE,TOGGLE_TAB } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getAllTodos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addTask = (post) => async (dispatch) => {
  try {
    const { data } = await api.addTask(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteTask = (id) => async (dispatch) => {
  try {
    await await api.deleteTask(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};


export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}

// original functions

export const dateTask=(data)=>async(dispatch)=>{
  try{

      console.log(data)
      // const res = await axios.post(`${API_URL}/datetask`,data);
      // dispatch({type:"DATE_TASK", payLoad:res.data});
  }catch (error) {
      console.log("Error")
  }
}


export const toActive=(taskname)=>async(dispatch)=>{
  try{
      // const res = await axios.post(`${API_URL}/toggleToActive`)
      // dispatch({type:"CHANGE_TO_ACTIVE", payLoad:taskname});
  }catch(error){
      console.log("ERROR")
  }
}

// Status Change To pending
export const toPending=(taskname)=>async(dispatch)=>{
  try{
      // const res = await axios.post(`${API_URL}/toggleToPending`)
      // dispatch({type:"CHANGE_TO_PENDING", payLoad:taskname});
  }catch(error){
      console.log("ERROR")
  }
}

// Status Change To Done
export const toDone=(taskname)=>async(dispatch)=>{
  try{
      // const res = await axios.post(`${API_URL}/toggleToDone`)
      // dispatch({type:"CHANGE_TO_DONE", payLoad:taskname});
  }catch(error){
      console.log("ERROR")
  }
}


//Change Tab
export const changeTab=(data)=>async(dispatch)=>{
  try {
      dispatch({type:data})
  } catch (error) {
      console.log("ERROR")
      
  }
}