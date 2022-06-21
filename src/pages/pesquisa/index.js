import { Container,Navegador,Rodapé } from "./styles";
import {useState} from 'react';
import {Link} from "react-router-dom";
import SearchResults from "./components";






function Pesquisa(){
    const [resultado, setResultado] = useState ([]);
    const handleInputChange = (e) => {
        e.preventDefault();
        const {value} = e.target;

        if (!value) return;

        fetch(`https://api.themoviedb.org/3/keyword/${value}?api_key=b3492dbec92e96fd0f9f9759b2dfe829&language`)
            .then (response => response.json ())
            .then(data =>{ 
                setResultado(data.results)
                console.log ('Data', data);
            })

        
        
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
        
        <h1>Pesquisa</h1>
        

        <form>
            <label htmlFor= "search">Digite aqui</label>
            <input name= "search" id="search" onChange={handleInputChange}/>
        </form>
        <SearchResults data={resultado}/>
        
        <Rodapé>
            <span>© 2022 Copyright. Todos os Direitos reservados. Trabalho Portal de Filmes por Thiago Lacerda.</span>
        </Rodapé>

            


      </Container>

      
    )
}
export default Pesquisa;