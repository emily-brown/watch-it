import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import { MovieCard } from "../components/card";
import API from "../utils/API";
import "./Search.css"


class Movies extends Component {
    state = {
        movie: [],
        title: "",
        showCard: false
    };

    seeChanges = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    findMovie = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getTitle(this.state.title)
            .then(res => {
                if (res.data.Response === "True") {
                    this.setState({ movie: res.data, showCard: true })
                } else {
                    this.setState({ movie: [], showCard: false })
                }
            })
            .catch(err => {
                console.log(err)
                this.setState({ movie: [], showCard: false })
            })
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    saveMovie = event => {
        event.preventDefault();
        let info = {
            "title": this.state.movie.Title,
            "description": this.state.movie.Plot,
            "poster": this.state.movie.Poster,
            // "watched": true,
        }
        API.saveTitle(info)
            .then(res => {
                this.setState({ movie: [], showCard: false })
            }
            )
            .catch(err => {
                console.log(err)
            })
    };


    watchedMovie = event => {
        event.preventDefault();
        let info = {
            "title": this.state.movie.Title,
            "description": this.state.movie.Plot,
            "poster": this.state.movie.Poster,
            "watched": true,
        }
        API.updateTitle(info)
            .then(res => {
                this.setState({ movie: [], showCard: false })
            }
            )
            .catch(err => {
                console.log(err)
            })
    };

    render() {

        return (
            <main>
                <div className="main-container">
                    <div className="Title">
                        <h1>Watch It</h1>
                        <h2>Keep track of the movies and shows that you want to watch and have already seen</h2>


                        <Container fluid>
                            <Row>&nbsp;</Row>
                            <Row>
                                <Col size="col-md-6 offset-md-3">
                                    <form>
                                        <div className="form-group">
                                            <label className="col-12">Search Movie:</label>
                                            <div className="col-12">
                                                <input type="text" className="form-control" id="searchMovie" value={this.state.title} name="title" onChange={this.seeChanges} autoFocus />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-secondary float-right" onClick={this.findMovie}>Search</button>
                                    </form>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="col-md-6 offset-md-3">
                                    <h1></h1>
                                    <MovieCard
                                        visible={this.state.showCard}
                                        key={this.state.movie.Title}
                                        title={this.state.movie.Title}
                                        image={this.state.movie.Poster}
                                        plot={this.state.movie.Plot}
                                        save={this.saveMovie} />
                                </Col>
                            </Row>
                            

                        </Container>
                    </div>
                </div>
            </main>
        )
    };
}

export default Movies;