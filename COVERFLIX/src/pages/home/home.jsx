/* eslint-disable react/jsx-no-undef */
import { useState, useEffect } from "react";
import { FooterComponent } from "../../components/footer/FooterComponent";
import { getList } from "../../api/api";
import { Grid, MainContainer, Part1, Part2 } from "./Home.style";
import { Card } from "../../components/footer/card/Card";
function Home() {
    const [movies, setMovies] = useState ([]);

    useEffect(() => {
        getList(setMovies);
    }, []);
    
    return (
        <MainContainer>
            
            <Part1/>
            <Part2>
                <p>Filmes Populares</p>
            </Part2>
            <Grid>
                {movies.map((movie) => (
                    <Card movie={movie}/>
                ))}
            </Grid>
            <FooterComponent/>
        </MainContainer>
    );
}

export default Home;