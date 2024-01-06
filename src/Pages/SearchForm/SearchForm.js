import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../../Context/SearchProvider/SearchProvider";

const SearchForm = () => {
  const {auth, setAuth} = useContext(searchContext)
  console.log('values', auth)
  const navigate = useNavigate()

  const handelSubmit = async (e) =>{
    e.preventDefault();
    try {
        const {data} = await axios.get(`http://localhost:4000/search/${auth.keyword}`);
        setAuth({...auth, results:data}) // results:data equal to context result:[]
        navigate('/displaySearchItem')
    
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
          onChange={(e) => setAuth({ ...auth, keyword: e.target.value })}
        />
        <button className="btn join-item rounded-r-full">Subscribe</button>
      </form>
    </div>
  );
};

export default SearchForm;
