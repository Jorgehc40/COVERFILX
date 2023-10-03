import { FooterComponent } from "../../components/footer/FooterComponent"
// import { getList } from "../../api/api";
import { Grid, MainContainer } from "./Detail.style";
import { Link } from "react-router-dom"; // Certifique-se de importar o Link do react-router-dom
import { Header } from "../../components/header/Header"
import { useSelector } from "react-redux";


function Detail(){
  const state = useSelector((state) => state.coverflix.movie)
  
    return (
        <MainContainer>
            <Header/>
            <Grid>
                <img src={`http://image.tmdb.org/t/p/w500/${state.poster_path}`} alt="Imagem"/>
                <div>
                    <p>Título:</p>
                    <p>Sinopse:</p>
                    <p>Data de lançamento:</p>
                    <p>Nota:</p>
                    <Link>Voltar para a Home</Link>
                </div>
            </Grid>
            
            <FooterComponent/>
        </MainContainer>
    )
}

export default Detail;