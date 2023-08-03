import React from 'react'

const FeaturedMovie = ({item}) => {
  return (
    <section className='featured' style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      height: '500px',
    }}>
      <div>{item.original_name}</div>
    </section>
  )
}

export default FeaturedMovie