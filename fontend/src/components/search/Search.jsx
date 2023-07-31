import './search.css'



const Search = () => {
    return (
        <form className='findVendor' method='GET'>
            {/* <BsSearch style={ searchbtn }/> */}
            <input className='vendorInput' type="text" name='search' id='search' placeholder='Try "My oil connect"'/>
            <button type='submit'> Search </button>
        </form>
    )
}

export default Search;