import React from "react";
import { createContext ,  useContext ,  useState } from "react";


const Context = createContext();

export function ApplicationContextProvider( {children , font:init} ) {
	const [font, setFont] = useState(init);
	const value = {
		font,
		setFont
	}
	return(
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}

export function useApplicationContext() {
	return useContext(Context)
}