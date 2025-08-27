import { create } from "zustand"
import { supabase } from "../indexx"

export const useAuthStore = create((set,get) => ({
	isAuth: false,
	signWithGoogle: async () => {
		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
			})
			if (error) throw new Error("A ocurrido un error durante la autenticacion")
			set({ isAuth: true })
		return data
		} catch (error) {
			
		}
	},
	signOut: async () => {
			const { error } = await supabase.auth.signOut()
			if (error) throw new Error("A ocurrido un error durante el cierre de sesion")
			set({ isAuth: false })
	}

}))
