import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../index";
import { useInRouterContext } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => { 
	const [user, setUser] = useState([]);
	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (session) => { 
				if (session == null) {
					setUser(null)
				} else { 
					setUser(session);
					console.log("session",session)
				}
			}
		)
		return () => { 
			authListener.subscription;
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user } }>
			{ children }
		</AuthContext.Provider>
	)
}

export const userAuth = () => { 
	return useContext(AuthContext)
}