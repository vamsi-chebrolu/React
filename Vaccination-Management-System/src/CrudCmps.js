import axios from "axios";

const url='http://localhost:8000/users';
 export const getallUsers= (url1,id)=>
 {
    id=id|| "";
    url1=url1|| url;
    return axios.get(`${url1}/${id}`);
 }
 export const getOneUser=(url1)=>
 {
    return axios.get(`${url1}`);
 }
 export const addUser=async (user)=>
 {
    return await axios.post(url, user);
 }

 export const editUser=async (user,id,url1)=>
 {
   url1=url1 || url;
    return await axios.put(`${url1}/${id}`, user);
 }
 export const editOneUser=async (url1, user)=>
 {
    return await axios.put(`${url1}`, user);
 }
 export const deleteUser=async (url1, id)=>
 {
   url1=url1 || url;
    return await axios.delete(`${url1}/${id}`);
 }