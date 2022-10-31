import React from 'react'; 
import './TrackerFilter.css';
import favoritestar from '../../assets/favoritestar.svg'

const TrackerFilter = ({filterHandler}) => {

    const handleClick = (value) => {
        filterHandler(value) 
    }

    return(
        <div className="trackerFilter--div">
            <li className="trackerFilter--list">
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-all"
                        onClick={() => handleClick("all")}>All</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-applied"
                        onClick={() => handleClick("Applied")}>Applied</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-upcomingInterview"
                        onClick={() => handleClick("Upcoming")}>Upcoming Interview</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-interviewed"
                        onClick={() => handleClick("Interviewed")}>Interviewed</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-archived"
                        onClick={() => handleClick("Archived")}>Archived</button>
                </ul>
                {/* <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-favorite"><img src={favoritestar} alt="favorite" className='favorite-icon' /></button>
                </ul> */}
            </li>
        </div>
    );

}

export default TrackerFilter;