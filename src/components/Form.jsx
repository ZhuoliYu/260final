import { useState } from 'react';//imrs shortcut


const Form = ({ResultMovies}) => {

const [searchValue, setSearchValue] = useState('');//usf shortcut
const handleChange = (event) => {
    setSearchValue(event.target.value);
    // console.log(searchValue);
};
//submit handler call search, not search handler itself
    const handleSubmit = (event) =>{
        event.preventDefault();//triger searchMovies when submit, happen in App component
        ResultMovies(searchValue);
        //clear the form
        setSearchValue(""); //just set an empty string

    };

    return ( 
        <form onSubmit={handleSubmit} id="search" className="search">
        <input onChange={handleChange} type="search" placeholder="Search for a title..." 
        value={searchValue} />
        {/* value={searchValue}  makes a controlled component,handle by browser */}
        <div className="searchResults"></div>
      </form>
     );
}
 
export default Form;