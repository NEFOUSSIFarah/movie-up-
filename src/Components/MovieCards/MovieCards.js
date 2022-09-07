import React from 'react'
import { Button, Card } from 'react-bootstrap'
import MovieRating from '../Rating/Rating'

const MovieCards = ({movie}) => {
  return (
    <div className='card-btn'>
    <Card style={{ width: '18rem', height:'50rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating isMovieRating={true} movieRating ={movie.rate}/>
       
        <div>
        <Button><a href={movie.trailer} target={"blanck"}> Trailer </a></Button>

        </div>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCards