import { FETCH_ALL, CREATE, UPDATE, DELETE,TOGGLE_TAB,TOGGLE_DONE,TOGGLE_ACTIVE,TOGGLE_PENDING } from '../constants/actionTypes';
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

export const updateTodo = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.updateTodo(id, task);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteTask = (id) => async (dispatch) => {
  try {
     await api.deleteTask(id);

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


export const toggleActive=(id)=>async(dispatch)=>{
  try{
    const {data}=await api.toggleDone(id);

    dispatch({type:TOGGLE_ACTIVE,payload:data});
}catch(error){
    console.log(error);
}
}

// Status Change To pending
export const togglePending=(id)=>async(dispatch)=>{
  try{
    const {data}=await api.toggleDone(id);

    dispatch({type:TOGGLE_PENDING,payload:data});
}catch(error){
    console.log(error);
}
}

// Status Change To Done
export const toggleDone=(id)=>async(dispatch)=>{
  try{
      const {data}=await api.toggleDone(id);

      dispatch({type:TOGGLE_DONE,payload:data});
  }catch(error){
      console.log(error);
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