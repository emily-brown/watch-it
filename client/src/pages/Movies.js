import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/grid";
import { Card } from "../components/card";

class Movies extends Component {
    state = {
        movies: [],
        title: "",
        description: "",
        stars: ""
    };

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
        API.getSaved()
            .then(res =>
                this.setState({
                    movies: res.data, 
                    title: "",
                    description: "",
                    stars: ""
            
                })
            )
            .catch(err => console.log(err));
    };

    deleteMovie = event => {
        event.preventDefault()
        console.log(event.target.dataset.index)
        let indexUsed = event.target.dataset.index
        
        
       console.log(this.state.movies) 
        API.deleteTitle(event.target.id)
        .then(res => {
            this.state.movies.splice(indexUsed,1)

            this.setState({
                movies: this.state.movies
            })
        })
            .catch(err => console.log(err));
    }


    markWatched = id => {
        // let info = {
        //     "title": this.state.movie.Title,
        //     "description": this.state.movie.Plot,
        //     "poster": this.state.movie.Poster
        // }
        API.updateTitle(id)
            .then(res => {
                    // this.setState({ movie: [], showCard: false })
                    console.log("happy")
                }
            )
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="col-12">
                        <Row>
                            {this.state.movies.map((movie, index) => {
                                return (
                                    <div key={index} id={"card-" + movie._id} className="col-md-4">
                                        <Card
                                            visible={true}
                                            key={index}
                                            index={index}
                                            id={movie._id}
                                            title={movie.title}
                                            image={movie.poster}
                                            plot={movie.description}
                                            save={this.deleteMovie}
                                            watched={movie.watched}
                                            save={this.watchMovie}
                                            actionButton={false}
                                            watchButton={false}
                                            markWatched={this.markWatched}
                                        />
                                    </div>
                                )
                            })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }


}

export default Movies;
