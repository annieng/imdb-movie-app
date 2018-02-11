const express = require('express')
const app = express()
const port = process.argv[2] || 4420
var bodyParser = require('body-parser')

// serving files in public folder
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
// tell express to use ejs as the rendering engine so we can start building out our views
app.set('view engine', 'ejs')

// routes ~ endpoints

app.get('/', (req, res) => {
  res.render('index',{ 
    movies
  })
})

app.get('/movie/:movieId', (req, res) => {
  let {movieId} = req.params
  let movie = movies[movieId]
  // returns whatever ID is in the string ie. movie/0 returns 0
  res.render('movie',{
    movie
  })
})

 app.get('/search', (req, res) => {
   let {movieQuery} = req.query
   let results = movies.filter(movie => {
    return movie.title.toLowerCase().includes(movieQuery.toLowerCase())
    })
      res.render('search', {
        results
    })
  })

// movie data
const movies = [
  {
    title: 'The Wackness',
    year: '2008',
    rated: 'R',
    released: '1 August 2008',
    runtime: '1h 57min',
    genre: 'Comedy, Drama, Romance',
    director: 'Jonathan Levine',
    writer: 'Jonathan Levine',
    actors: 'Olivia Thrilby, Ben Kingsley, Josh Peck, Luke Shapiro',
    plot: 'Luke Shapiro has just graduated from high school, sells marijuana, and trades pot for therapy from a psychologist. Luke is attracted to a classmate, Stephanie, who\'s out of his league. By July, he\'s hanging out with Stephanie, taking her on his rounds selling pot out of an ice-cream pushcart.Then things take a turn.',
    language: 'English',
    country: 'USA',
    poster: '/images/posters/wackness.jpg'
  },
  {
    title: 'Smiley Face',
    year: '2007',
    rated: 'R',
    released: '1 August 2008',
    runtime: '1h 25min',
    genre: 'Comedy',
    director: 'Gregg Araki',
    writer: 'Dylan Haggerty',
    actors: 'Anna Faris, John Krasinki, Adrien Brody',
    plot: 'After a young actress unknowingly eats her roommate\'s marijuana cupcakes, her day becomes a series of misadventures.',
    language: 'English',
    country: 'France',
    poster: '/images/posters/smileyface.jpg'
  },
  {
    title: 'Jackie Brown',
    year: '1997',
    rated: 'R',
    released: '25 December 1997',
    runtime: '2h 34min',
    genre: 'Crime, Drama, Thriller',
    director: 'Quentin Tarantino',
    writer: 'Quentin Tarantino, Elmore Leonard',
    actors: 'Pam Grier, Samuel L. Jackson, Robert Forster',
    plot: 'A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.',
    language: 'English',
    country: 'USA',
    poster: '/images/posters/jackiebrown.png'
  },
  {
    title: 'Bully',
    year: '2001',
    rated: 'R',
    released: '15 June 2001',
    runtime: '1h 53min',
    genre: 'Crime, Drama, Thriller',
    director: 'Larry Clark',
    writer: 'Zachary Long, Roger Pullis',
    actors: 'Brad Renfro, Bijou Phillips, Rachel Miner',
    plot: 'A pack of naïve teenagers conspire to murder a mutual friend, whose aggressive demeanor has proved too much.',
    language: 'English',
    country: 'USA',
    poster: '/images/posters/bully.jpg'
  }
]


// express is listening on 4420 or whatever is logged in the console
app.listen(4420, () => {
  console.log('port 4420 is the weed channel tuning in')
  console.log('type CTRL + C to quit the weed')
})
