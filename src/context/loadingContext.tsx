import { createContext } from 'react'

type TLoadingContext = {
    loading: boolean,
    setLoading: (arg: boolean) => void
}

export const LoadingContext = createContext<TLoadingContext>({
    loading: false,
    setLoading: () => {}
})