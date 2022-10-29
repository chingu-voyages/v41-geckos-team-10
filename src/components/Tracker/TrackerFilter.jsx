import React from 'react'; 
import './TrackerFilter.css';
import favoritestar from '../../assets/favoritestar.svg'

const TrackerFilter = () => {

    return(
        <div className="trackerFilter--div">
            <li className="trackerFilter--list">
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-all">All</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-applied">Applied</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-upcomingInterview">Upcoming Interview</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-interviewed">Interviewed</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-archived">Archived</button>
                </ul>
                <ul className="trackerFilter--list_item">
                    <button className="trackerFilter--button button-favorite"><img src={favoritestar} alt="favorite" className='favorite-icon' /></button>
                </ul>
            </li>
        </div>
    );

}

export default TrackerFilter;