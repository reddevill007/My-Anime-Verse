import React from 'react';
// import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';


const MainContent = (props) => {
    return (
        <div style={{ marginTop: '30px' }}>
            <div>
                <form className="search-box" onSubmit={props.handleSearch}>
                    <input type="search" placeholder='Search anime' required value={props.search} onChange={e => props.setSearch(e.target.value)} />
                </form>
            </div>
            {props.loading && <Spinner />}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {props.animeList.map(anime => (
                    <div key={anime.mal_id}>
                        <h3>{anime.title}</h3>
                        <img src={anime.image_url} alt="anime" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainContent