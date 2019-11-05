import React from "react";

export function Card({ visible, title, plot, image, save,actionButton = true,watched,deleteMovie,markWatched,id,index = 0}) {
    if (visible) {
        if (image === "N/A") {
            image = "https://picsum.photos/200/300"
        }
        let buttonA = "";
        let buttonB = "";
        if(actionButton){
            buttonA = <a href="/api/save" className="btn btn-primary" onClick={save}>Save</a>
        }else {
            buttonA = ( <a href="/api/delete" className="btn btn-danger" onClick={deleteMovie} id={id} data-index={index}>Delete</a>);
            
            buttonB = (
                <a
                    href="/movies"
                    className={watched ? 'btn btn-success' : 'btn btn-secondary'}
                    onClick={e => markWatched(e, id)}
                >
                    Watched
                </a>
                
            );
            

        }

        // let buttonB = <a href="/api/save" className={watched ? "btn btn-success":"btn btn-secondary"} onClick={()=> markWatched(id)}>Watched</a>
    
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={image} className="card-img img-fluid" alt={title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{plot}</p>
                            {buttonA}
                            {buttonB}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<>Whoops!</>)
    }
}