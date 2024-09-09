import { create } from 'zustand'
import { supabsae } from "../index"

export const useAuthStore = create((set, get) => ({
	isAuth: false,
	singWithGoogle: async () => {
		try {
			const { data, error } = await supabsae.auth.signInWithOAuth
				({ provider: "google" })
		} catch (error) {

		}
	}
}))

