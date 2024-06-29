import axios from 'axios'
import './Row.css'
import { useState, useEffect, useRef } from 'react'
import RowItem from '../RowItem/RowItem'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Row({title, fetchURL, id}) {
    const [movies, setMovies] = useState([])
    const rowRef = useRef(null)

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setMovies(request.data.results)
            // console.log(request.data.results)
            return request
        }
        fetchData();
    } ,[fetchURL])

    const scroll = (direction) => {
        const {current} = rowRef
        if(direction === 'left') {
            current.scrollLeft -= 200;
        } else {
            current.scrollLeft += 200;
        }

    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='slider'>
            <div className='slider-arrow-left'>
                <span onClick={() => scroll('left')}>
                    <ArrowBackIosNewIcon/>
                </span>
            </div>
            
            <div className='row-posters' ref={rowRef}>
                {movies.map((movie) => (
                    <RowItem key={movie.id} movie={movie} />
                ))}
            </div>
            <div className='slider-arrow-right'>
                <span onClick={() => scroll('right')}>
                <ArrowForwardIosIcon/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Row