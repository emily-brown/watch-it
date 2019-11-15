import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import { MovieCard } from "../components/card";
import API from "../utils/API";
import Icon from '@material-ui/core/Icon';
import "./Search.css"


class Movies extends Component {
    state = {
        movie: [],
        title: "",
        showCard: false
    };

    seeChanges = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    findMovie = event => {
        event.preventDefault();
        API.getTitle(this.state.title)
            .then(res => {
                console.log(res)
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
                    <div>
                        <h1 className="text-center" id="title">WATCH IT</h1>
                        <h2 className="text-center" id="subtext">Keep track of your must sees</h2>

                        <div className="row d-flex justify-content-center" id="form">



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
                                            <div id="searchbtn">
                                            <button id="submit" type="submit" className="btn btn-secondary float-right" onClick={this.findMovie}>Search<Icon>search</Icon></button>
                                            </div>
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
                </div>
            </main>
        )
    };
}

export default Movies;