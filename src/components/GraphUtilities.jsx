import React from "react";
import classnames from "classnames";

const Line = ({spacing}) => {
    return (
        <div className={classnames('graph_line', [`bottom-${spacing}`])}
        />
    )
};

//why doesn't the bottom-spacing property work?

const Bar = ({percent}) => {
    return (
        <div className={classnames('graph_bar', [`h-${percent}`])} />
    )
}; 

export { Line, Bar }