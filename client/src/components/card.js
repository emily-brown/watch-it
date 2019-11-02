import React from "react";

export function Card({ visible, title, plot, image, save,actionButton = true,id = "x",index = 0}) {
    if (visible) {
        if (image === "N/A") {
            image = "https://picsum.photos/200/300"
        }
        let buttonA = ""
        if( actionButton ){
            buttonA = <a href="/api/save" className="btn btn-primary" onClick={save}>Save</a>
        }else {
            buttonA = <a href="/api/delete" className="btn btn-danger" onClick={save} id={id} data-index={index}>Delete</a>
        }
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
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<></>)
    }
}