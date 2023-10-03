import { MainContainer } from "./Header.style"
import { useSelector } from "react-redux"


export const Header = () => {
    const state = useSelector((state) => state.coverflix.movie)

    return(
        <MainContainer>
            <p>state.movie</p>
        </MainContainer>
    )
}