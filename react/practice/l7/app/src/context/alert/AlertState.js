import {AlertContext} from "./alertContext";

export const AlertState = ({children}) => {
	return (
		<AlertContext.Provider>
			{children}
		</AlertContext.Provider>
	)
}