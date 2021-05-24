import React from "react";

const Form = (props) => {

    return (
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <div className="form-group col-5 mx-auto center m-3">
                    <input type="text" name="name" className="form-control" placeholder="Name" onChange={props.onChangeHandler}></input>
                    <span className="alert-danger">{props.errors.name && props.errors.name.message}</span>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <input type="text" name="imageURL" className="form-control" placeholder="Image URL" onChange={props.onChangeHandler}></input>
                    <span className="alert-danger">{props.errors.imageURL && props.errors.imageURL.message}</span>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <input type="number" name="treasures" className="form-control" placeholder="Number of Treasures" onChange={props.onChangeHandler}></input>
                    <span className="alert-danger">{props.errors.treasures && props.errors.treasures.message}</span>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <input type="text" name="catchPhrase" className="form-control" placeholder="Catch Phrase" onChange={props.onChangeHandler}></input>
                    <span className="alert-danger">{props.errors.catchPhrase && props.errors.catchPhrase.message}</span>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <select name="position" onChange={props.onChangeHandler}>
                        <option value="">Position:</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                    </select>
                    <span className="alert-danger">{props.errors.position && props.errors.position.message}</span>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <label htmlFor="peg">Peg leg?</label>
                    <input type="checkbox" name="peg" className="form-check-input" onChange={props.onChangeHandler} defaultChecked="true"></input>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <label htmlFor="patch">Eye Patch?</label>
                    <input type="checkbox" name="patch" className="form-check-input" onChange={props.onChangeHandler} defaultChecked="true"></input>
                </div>

                <div className="form-group col-5 mx-auto center m-3">
                    <label htmlFor="hook">Hook?</label>
                    <input type="checkbox" name="hook" className="form-check-input" onChange={props.onChangeHandler} defaultChecked="true"></input>
                </div>

                <input type="submit" className="btn btn-success btn-lg" value="Submit" />
            </form>



        </div>
    )


}

export default Form;