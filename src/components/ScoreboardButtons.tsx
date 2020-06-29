import React from "react";

type ScoreboardButtonsType = {
    counter: () => void,
    title: string,
    count: number,
    maxValue: number
}

export function ScoreboardButtons(props: ScoreboardButtonsType) {
debugger;

    return (
        <div>
            <button
                onClick={() => props.counter()}
                className={props.count === props.maxValue ? "disabled" : ""}>
                {props.title}
            </button>
        </div>
    )

}