import React from "react";

const ChoiceList = (props) => {
    return (
        <div>
            {props.choices.map((choice) => {
                return (
                    <div className="form-check" key={choice.id}>
                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                        onClick={()=>props.handleClick(choice.id)}/>
                        <label className="form-check-label">
                            {choice.answer}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
export default ChoiceList;