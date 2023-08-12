import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';

function DashBoardSearch() {
    return(
        <div>
            <div class="search-wrapper w-100">
                <FontAwesomeIcon className='fs-5 ms-1 search-icon' icon={faSearch} />
                <input class="search-input w-100" type='text' placeholder='Search Here'></input>
            </div> 
        </div>
    )
}

export default DashBoardSearch;