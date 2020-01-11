import React from "react";
import { useApplicationContext } from "./application-context"


function View(){
	const { font } = useApplicationContext();

	// console.log(props)
	return (
		<div style={ {fontSize:`${font}px`} }> View.. </div>
	)
}

export default View;
