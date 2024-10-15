import { create } from 'zustand'
import { supabase } from "../index"
import { useState } from "react"

export const useAuthStore = create((set) => ({
	isAuth: false,
	dataUserGoogle: [],
	singInWithGoogle: async () => {
		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: "google",
			});

			if (error)
				throw new Error("A ocurrido un error durante la autentificacion")
			set({ isAuth: true })
			return data
		} catch (error) {}
	},

	singOut: async () => {
		const { error } = await supabase.auth.singOut();
		set({ isAuth: false });
		if (error)
			throw new Error("A ocurrido un error durante el cierre de sesion");
	},
}))

