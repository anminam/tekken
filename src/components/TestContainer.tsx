import React from 'react';
import { makePerson } from "actions";
import { connect } from "react-redux";
import {Dispatch}from "redux";
import tk from "core/Tk";

const TestContainer = ({makePerson}:any) => {
    return (
        <div className="_test_container">
            <button type="button" onClick={()=>_makePerson(makePerson)}>생성</button>
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

export default connect(mapStateToProps,mapDispatchToProps)(TestContainer);