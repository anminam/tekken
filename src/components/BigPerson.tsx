import React from 'react';
import { makePerson } from "actions";
import { connect } from "react-redux";
import {Dispatch}from "redux";
import tk from "core/Tk";

const BigPerson = ({makePerson}:any) => {
    // const name = 'anminam';
    const name = 'suckwind';
    const img = `assets/bigperson/${name}.png`;
    return (
        <div className="big_person_container">
            <div className="__item">
                <div className="__img" style={{backgroundImage: `url(${img})`}}></div>
            </div>  
        </div>
    )
}

const _makePerson = (callback:any) => {
    const name = tk.makeTestPerson();
    callback(name);
}


const mapStateToProps = (state:any) => ({
  count: 1
});
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        makePerson: (name: string) => dispatch(makePerson(name))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BigPerson);