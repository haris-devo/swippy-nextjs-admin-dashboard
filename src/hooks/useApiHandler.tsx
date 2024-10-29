// import { removeSpaces } from '@/functions/helpers'
import {setAuthData} from  '@/store/slices/auth'
import { setLoading } from '@/store/slices/loading'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'


type ApiHandlerProps = {
  url?: string
  method?: string
  data?: any
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
  formData?: Object
  image?: any
  handleResponse?: any
  setData?: any
}

export const useApihandler = () => {
  
  const dispatch=useDispatch()
  const route=useRouter()


  const postData=({formData,url,handleResponse,image}:ApiHandlerProps)=>{
    const formdata=new FormData()
    
    dispatch(setLoading({isLoading:true}))
    formdata.append('data',JSON.stringify(formData))
    // console.log(image)
    // return;
    if(image){
    //   console.log(image)
      formdata.append('image',image)
    } 
    axios.post(`http://52.203.74.103:4001/${url}`,formdata,{
      withCredentials:true,
      headers:{
         'Content-Type': 'multipart/form-data'
      }
    }).then(res=>{
        toast(((res.data.message)))
        handleResponse(res?.data)
        
    dispatch(setLoading({isLoading:false}))
    }).catch(err=>{
      toast(((err.response?.data.message)),{type:'error'})
      if(err.response?.status==401||err.response?.status==403){
        if(location.href.includes('dashboard')){
          dispatch(setAuthData({isLogin:false}))
          route.push('/auth/signin')
        }
      }
      dispatch(setLoading({isLoading:false}))
    })
  }
  const updateData=({formData,url,handleResponse,image}:ApiHandlerProps)=>{
    const formdata=new FormData()
    
    dispatch(setLoading({isLoading:true}))
    formdata.append('data',JSON.stringify(formData))    
    axios.put(`http://52.203.74.103:4001/${url}`,formdata,{
      withCredentials:true,
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>{
        toast(((res.data.message)))
        handleResponse(res.data)
        
    dispatch(setLoading({isLoading:false}))
    }).catch(err=>{
      toast(((err.response?.data.message)),{type:'error'})
      
    dispatch(setLoading({isLoading:false}))
    })
  }
  const getData=({url,setData}:ApiHandlerProps)=>{
    dispatch(setLoading({isLoading:true}))
      axios.get(`http://52.203.74.103:4001/${url}`,{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      }).then(res=>{
          setData(res.data)
          
    dispatch(setLoading({isLoading:false}))
      }).catch(err=>{
        
    dispatch(setLoading({isLoading:false}))
        if(err.response?.status==401||err.response?.status==403){
          if(location.href.includes('dashboard')){
            dispatch(setAuthData({isLogin:false}))
            route.push('/auth/signin')
          }
        }
      })      
  }

  
    return {postData,getData,updateData}
}
