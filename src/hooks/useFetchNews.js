import { useEffect, useState} from "react";
import { NEWS_API ,NEWS_OPTION } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addNews } from "../utility/newsSlice";





export const useFetchNews=()=>
    
   { 
    const dispatch =useDispatch()
    

    useEffect(()=>{
        fetchnews()
    },[]);

    const fetchnews=async()=>{
        const response = await fetch(NEWS_API, NEWS_OPTION);
        const data = await response.json();
        dispatch(addNews(data.storyList))
       
    }
  }