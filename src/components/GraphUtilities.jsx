import React from "react";
import classnames from "classnames";
import '../index.css'

const Line = ({spacing}) => {
    return (
        <div className={classnames('graph_line', [`bottom-${spacing}`])}
        />
    )
};

//why doesn't the bottom-spacing property work?

const Bar = ({percent, spacing}) => {
    return (
        <div className={classnames('graph_bar', [`h-${percent}`], [`left-${spacing}`])} />
    )
}; 

export { Line, Bar }