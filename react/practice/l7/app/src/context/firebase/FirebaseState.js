import {FirebaseContext} from './firebaseContext'

export const FirebaseState = ({children}) => {
	return (
		<FirebaseContext.Provider>
			{children}
		</FirebaseContext.Provider>
	)
}