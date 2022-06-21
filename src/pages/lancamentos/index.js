import { Container,Navegador, FilmeLista, Filme, Rodapé } from "./styles";
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";




function Lancamentos (){
    const [filmes, setFilmes] = useState ([])
    const image_path = 'https://image.tmdb.org/t/p/w500'


    useEffect (() => {
        //consumir a api...

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b3492dbec92e96fd0f9f9759b2dfe829&language=pt-BR&page=1')
            .then (response => response.json ())
            .then(data =>{
               console.log (data.results)
               setFilmes(data.results)
            })

    }, [])

    
    return (
      <Container>
        <Navegador>
            <li>
                <img src="https://cdn.discordapp.com/attachments/988837936575414292/988856869059723284/LOGOTH.png" alt="logo"/>
            </li>
            <li>
                <Link to={`/`}>
                <button>Home</button>
                </Link>
                
            </li>
            <li>
            <Link to={`/lancamentos`}>
                <button>Lançamentos</button>
                </Link>
            </li>
            <li>
            <Link to={`/filmes`}>
                <button>Filmes</button>
                </Link>
            </li>
            <li>
            <Link to={`/pesquisa`}>
                <button>Pesquisa</button>
                </Link>
            </li>
        </Navegador>
        
        <h1>Lançamentos</h1>
        <FilmeLista>

            {filmes.map(filme =>{
                return (
                   <Filme>

                        <Link to= {`/details/${filme.id}`}>
                            <img src={`${image_path}${filme.poster_path}`} alt="Cartaz"/>
                            
                        </Link>
                        <p></p>
                        <span>{`${filme.original_title}`}</span> 
                
                    </Filme> 
                )
            })}

        </FilmeLista>
        <Rodapé>
            <span>© 2022 Copyright. Todos os Direitos reservados. Trabalho Portal de Filmes por Thiago Lacerda.</span>
        </Rodapé>

            


      </Container>

      
    )
}

export default Lancamentos;