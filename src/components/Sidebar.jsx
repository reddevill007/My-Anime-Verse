import React from 'react'

const Sidebar = ({ topAnime, topManga, topCharacter }) => {
    return (
        <div>
            <nav>
                <h3>Top Anime</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {topAnime.map(anime => (
                        <div key={anime.mal_id} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', background: 'red', height: '100px', width: '100px' }}>
                            <a href={anime.url} target="_blank" rel="noreferrer">
                                {anime.title}
                            </a>
                            <img src={anime.image_url} style={{ height: '40px', width: '40px', borderRadius: '50%' }} alt="" />
                        </div>
                    ))}
                </div>
                <h3>Top Manga</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {topManga.map(manga => (
                        <div key={manga.mal_id}>
                            <a href={manga.url} target="_blank" rel="noreferrer">
                                {manga.title}
                            </a>
                            <img src={manga.image_url} style={{ height: '40px', width: '40px', borderRadius: '50%' }} alt="" />
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Sidebar