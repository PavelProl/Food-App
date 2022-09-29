import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "setName": {
            return {
                name: action.payload,
                text: "",
                rating: 4
            }
        }
        case "setText": {
            return {
                ...state,
                text: action.payload,
            }
        }
        case "setRating": {
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
                            type: "setName",
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
                            type: "setText",
                            payload: event.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Rating</span>
                <input
                    type="number"
                    value={form.rating}
                    onChange={(event) => {
                        dispatch({
                            type: "setRating",
                            payload: event.target.value
                        })
                    }}
                />
            </div>
        </div>
    );
}
