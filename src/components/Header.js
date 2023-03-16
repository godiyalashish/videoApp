import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/logo.png";
import MenuIcon from "../assets/menuLogo.png";
import user from "../assets/user.png";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";



const Header = () => {
    const searchCache = useSelector(store => store.searchCache)
    const [searchText, setSearchText] = useState("");
    const [searchSuggestion, setSearchSuggestions] = useState([]);
    const [showSuggestion, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const handelSideBar = () => {
    dispatch(toggleMenu());
  };
  useEffect(()=>{
    
    const interval = setTimeout(()=>{
        if(searchCache[searchText]){
            setSearchSuggestions(searchCache[searchText])
        }else{
            handelSearchSuggestions()
        }
        },200);
    return ()=> {
        clearTimeout(interval);
  }
  },[searchText])
  const handelSearchSuggestions = async() =>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION+searchText);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(cacheResults({
        [searchText]:json[1]
    }))
  }
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1 gap-x-3 items-center">
        <img
          className="h-6 cursor-pointer"
          alt="menu"
          onClick={handelSideBar}
          src={MenuIcon}
        />
        <img className="h-8" alt="logo" src={Logo} />
      </div>
      <div className="col-span-10">
      <div>
        <input
          className="w-1/2 p-2 border border-gray-200 rounded-l-full"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onFocus={()=>setShowSuggestions(true)}
          onBlur={()=>setShowSuggestions(false)}
        />
        <button className="p-2 border border-gray-200 bg-gray-200 rounded-r-full">
          Search
        </button>
        {
            (showSuggestion) && (<div className="fixed bg-white py-2 px-5 w-[36%] border border-gray-100 rounded-xl shadow-lg">
            <ul>
            {
                searchSuggestion.map((suggestion)=>{
                    return(
                    <li key={suggestion}className="hover:bg-gray-100 py-2 px-1 rounded-sm">{suggestion}</li>
                )})
            }
            </ul>
        </div>)
        }
        
        </div>
        
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Header;
