import './Style.css'

import Header from './Header'
import MovieSearch from './Search'
import MovieList from './Movies'
import Footer from './Footer'

export default function main() {
    return (
        <div className="main">
            <Header/>
            <MovieSearch></MovieSearch>
            <MovieList></MovieList>
            <Footer></Footer>
        </div>
    )
}