import React, { useReducer } from "react";
import { Rating } from "../Rating/Rating";

const FORM_ACTIONS = {
    setName: "setName",
    setText: "setText",
    setRating: "setRating"
};

const reducer = (state, action) => {
    switch (action.type) {
        case FORM_ACTIONS.setName: {
            return {
                name: action.payload,
                text: "",
                rating: 4
            }
        }
        case FORM_ACTIONS.setText: {
            return {
                ...state,
                text: action.payload,
            }
        }
        case FORM_ACTIONS.setRating: {
            const text = action.payload;
            if (text === "") {
                return {
                    ...state,
                    rating: text
                }
            }
            const value = Number(text);
            if (!isNaN(value) && value >= 1 && value <= 5) {
                return {
                    ...state,
                    rating: value
                }
            }
        }
        default: {
            return state
        }
    }
};

export const NewReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, {
        name: "Нася",
        text: "Молви, друг",
        rating: 5
    });

    return (
        <div>
            <div>
                <span>Name</span>
                <input 
                    value={form.name}
                    onChange={(event) => {
                        dispatch({
                            type: FORM_ACTIONS.setName,
                            payload: event.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Text</span>
                <input 
                    value={form.text}
                    onChange={(event) => {
                        dispatch({
                            type: FORM_ACTIONS.setText,
                            payload: event.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Rating</span>
                <Rating
                    value={form.rating}
                    onChange={(value) => {
                        dispatch({
                            type: FORM_ACTIONS.setRating,
                            payload: value
                        })
                    }}
                />
            </div>
        </div>
    );
}
