import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEp6lY0SqncUw/profile-displayphoto-shrink_100_100/0/1547486520727?e=1626307200&v=beta&t=6hPVXpXOnoTPN_PzlhFSdv0UlWSpLg7va_ixbrkL1c4" 
          nome="Glayton Verissimo"
          descricao="Oi, eu sou o Glayton Verissimo. Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente faço curso na Labenu de web fullstack e estou buscando sóldios conhecimentos para o aperfeiçoamento das minhas hard skills."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>

      <div className="page-section-container">
      <h3>Contatos</h3>
      <CardPequeno
      imagem="https://svgsilh.com/svg/147563.svg"
      email="glayton.verissimo@hotmail.com"
      />
      <CardPequeno
      imagem="data:image/png;base64,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"
      endereco="Rua Emídio Ferreira"
      />
      
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yaL3dt4aiHiuyj1sbQ51uyYO22OvdJZ4_w&usqp=CAU" 
          nome="Aplysia Soluções Ambientais" 
          descricao="Atuação na resposabilidade e confiabilidade das diluições de todas as etapas do processo de ensaios ecotox na operação da Vale em Brumadinho-MG." 
        />
        
        <CardGrande 
          imagem="https://www.ifsudestemg.edu.br/noticias/reitoria/renovacao-de-bolsas-do-cnpq-e-avaliacao-positiva-marcam-os-10-anos-de-iniciacao-cientifica-do-if-sudeste-mg/cnpq3.png/@@images/7e2b8eb9-6aa6-44f2-831d-7a8a136fe3fa.png" 
          nome="CNPq" 
          descricao="Atuação em todas as etapas do processo de produção e
          transformação físico-química do sabão antimicrobiano e biodegradável a partir do
          ORF (óleo residual de fritura), Coleta de amostras para testes de qualidade para
          elaborações de laudos e relatórios.." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
