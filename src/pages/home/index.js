import { Container,Navegador, Filme, Lançamentos, Avaliações,Rodapé } from "./styles";
import {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";

function Home (){
    const [filmes, setFilmes] = useState ([]);
    const image_path = 'https://image.tmdb.org/t/p/w500';
    const carousel = useRef(null);


    useEffect (() => {
        //consumir a api...

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b3492dbec92e96fd0f9f9759b2dfe829&language=pt-BR&page=1')
            .then (response => response.json ())
            .then(data =>{
               console.log (data.results)
               setFilmes(data.results)
            })

    }, [])

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log (carousel.current);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
    const handleRightClick = (e) =>{
        e.preventDefault();
        console.log (carousel.current);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }


    
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
        <div className="carousel" ref={carousel}>
            {filmes.map(filme =>{
                return (
                    
                   <Filme>
                        
                        <Link to= {`/details/${filme.id}`}>
                            <img src={`${image_path}${filme.poster_path}`} alt="Cartaz"/>
                            
                        </Link>
                        
                    </Filme> 
                )
            })} 
        </div>
        <div className= "buttonsSeta">
            <button onClick={handleLeftClick}><img src="https://portais.univasf.edu.br/cei-2019/imagens/Seta.png/@@images/510bbe9a-f5a5-4a47-8a91-e84f8f801221.png" alt="seta esquerda"/></button>
            <button onClick={handleRightClick}><img src="https://portais.univasf.edu.br/cei-2019/imagens/Seta.png/@@images/510bbe9a-f5a5-4a47-8a91-e84f8f801221.png" alt="seta direita"/></button>
        </div>
        <h1>Sinopse dos principais filmes</h1>
        
        <Lançamentos>
            <div className="filme">
               <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxqAyeksmKEBTSiBCntNJZuiX3ieDaOEELjc6qdKYE-FdumCps" alt="cartaz"/>
                <div className="details">
                    <h2>Frangoelho e o Hamster das Trevas</h2>
                    <span className="sinopse">Um jovem e corajoso explorador se une a dois amigos de confiança para encontrar um artefato mágico antes que seu tio ganancioso coloque as patas nele.</span>   
                </div> 
            </div> 
            <div className="filme">
               <img src="https://image.tmdb.org/t/p/w500/uEPJQY1kEEz9XoZZ8rP6p9JUrmv.jpg" alt="cartaz"/>
                <div className="details">
                    <h2>Assassino Sem Rastro</h2>
                    <span className="sinopse">Alex Lewis é um assassino experiente com reputação de precisão discreta. Preso em um dilema moral, Alex se recusa a concluir um trabalho que viola seu código de ética e deve rapidamente caçar e matar as pessoas que o contrataram antes que eles e o agente do FBI Vincent Serra o encontrem primeiro. Alex tinha o objetivo de se vingar, mas, com uma memória que começa a vacilar, ele é forçado a questionar todas as suas ações, se perdendo na linha entre o certo e o errado.</span>   
                </div> 
            </div> 
            <div className="filme">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0PlCCR1xr9DNKblyHPD5qHSe-Y8NniP5MFWtbGFPaMPt0WZz3" alt="cartaz"/>
                <div className="details">
                    <h2>Tico e Teco: Defensores da Lei</h2>
                    <span className="sinopse">Depois de fazerem sucesso na série Tico e Teco os Defensores da Lei, os protagonistas Tico e Teco foram esquecidos. Anos mais tarde, a dupla retorna quando Teco recebe uma cirurgia computadorizada e pede ajuda para Tico. Reunidos, a dupla vai em busca dos outros integrantes do grupo, onde cada um deles tem um vício diferente por conta da fama. </span>   
                </div> 
            </div> 
            <div className="vermais">
               <Link to= {`/filmes`}><button>Ver mais</button></Link>   
            </div> 
        </Lançamentos>
        <h1> Avaliações principais</h1>

        <Avaliações>
            <li>
               <img src="https://i.pinimg.com/564x/8b/83/bc/8b83bc5795f6a411883332cd9ddae427.jpg" alt="foto"/> 
               <h2>Anya Forger</h2>
               <h3><u>Frangoelho e o Hamster das Trevas</u></h3>  
                <span className="sinopse">Filme muito engraçado, cheio de aventuras e emoções, super empolgante.</span>   
                 
            </li> 
            <li>
               <img src="https://i.pinimg.com/564x/8a/80/d0/8a80d0610916faa138c924a5233158b6.jpg" alt="foto"/>
               <h2>Walter White</h2> 
               <h3><u>Assassino Sem Rastro</u></h3>    
                <span className="sinopse">Um drama verdadeiramente soberbo que não oferece respostas e apenas leva os espectadores para o passeio.</span>   
                
            </li> 
            <li>
               <img src="https://pbs.twimg.com/profile_images/1515683239993626636/GkjBRud__400x400.jpg" alt="foto"/> 
               <h2>Gabriel Toledo</h2>  
               <h3><u>Tico e Teco: Defensores da Lei</u></h3>  

                <span className="sinopse">Este filme é inteligente e divertido, um local perfeito para os pais que cresceram com esses personagens para apresentá-los a seus filhos.</span>   
                 
            </li> 
             
        </Avaliações>
        <Rodapé>
            <span>© 2022 Copyright. Todos os Direitos reservados. Trabalho Portal de Filmes por Thiago Lacerda.</span>
        </Rodapé>



       

          


      </Container>

      
    )
}

export default Home;