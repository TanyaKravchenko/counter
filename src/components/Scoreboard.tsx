import React from "react";

type ScoreboardType = {
    count: number
    maxValue: number
}

export function Scoreboard(props: ScoreboardType) {
    return (
        <div className={props.count === props.maxValue ? "red" : ""}>
            {props.count}
        </div>
    )
}