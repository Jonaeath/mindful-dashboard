import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { searchContext } from "../../Context/SearchProvider/SearchProvider";

const SearchForm = ({setData, setIsDataChanged, isDataChanged}) => {
  const [searchValue, setSearchValue] = useState('')
  const {auth, setAuth} = useContext(searchContext)
  console.log('values', auth)
  const navigate = useNavigate()
  //Get Search value from url
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search')
  console.log('search', search)

  const getDataBasedOnSearch = async()=>{
    const {data} = await axios.get(`http://localhost:4000/search/${search}`);
    console.log('search res---->', data)
    setData(data)
  }

  useEffect(()=>{
    if(search && search !== ""){
      getDataBasedOnSearch()

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])

  // if empty
  useEffect(()=>{
    if(searchValue === ""){
      setIsDataChanged(!isDataChanged)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchValue])

  const handelSubmit = async (e) =>{
    e.preventDefault();
    try {
        if(auth?.keyword !== ""){
          navigate({
            pathname: "/dashboard",
            search: createSearchParams({
                search: auth?.keyword
            }).toString()
        });
      }else{
        navigate('/dashboard')
        setIsDataChanged(!isDataChanged)
      }
    
    } catch (error) {
        
    }
  }

  return (
    <div>
      <form className="join" onSubmit={handelSubmit}>
        <input
          className="input input-bordered join-item"
          type="search"
          placeholder="Search"
          value={auth.keyword}
          onChange={(e) => {
            setSearchValue(e.target.value)
            setAuth({ ...auth, keyword: e.target.value })
            }
          }
        />
        <button className="btn join-item uppercase rounded-r-full">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
