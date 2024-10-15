import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Login, Home, ProtectedRoute, userAuth } from "../index"

export function MyRoutes() {
	const { user } = userAuth();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					element={<ProtectedRoute user={user} redirectTo="/login" />} >
					
				</Route>
				<Route path="/" element={<Home />} />

			</Routes>
		</BrowserRouter>
	)

}
