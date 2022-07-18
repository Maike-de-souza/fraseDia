import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Image
} from 'react-native';

class fraseDia extends Component {

  constructor(props){
    super(props);
    this.state = {
      frase:'0i',
      referencia:''
    }
    this.frases = [

      {texto:"Eu sou o caminho, e a verdade e a vida: ninguém vem ao Pai, senão por mim.", ref:"João 14:6"  },
      {texto:"No princípio, Deus criou os céus e a terra.", ref:"Gênesis 1:1"  },
      {texto:"Obrigado Senhor, pelo Seu maravilhoso amor.", ref:"Salmos 107:15"  },
      {texto:"O meu amado é meu, e eu sou dele!", ref:"Cânticos 2:16"  },
      {texto:"Busque ao Senhor enquanto ainda há tempo.", ref:"Salmos 53:2"  },
      {texto:"Não se emolde ao padrão deste mundo, mas transforme-se!", ref:"Romanos 12:1"  },
      {texto:"Deus sabe o que é bom para você.", ref:"Eclesiastes 6:12"  },
      {texto:"Deus é a minha salvação. Terei confiança e não temerei.", ref:"Isaías 12:2"  },
      {texto:"O meu socorro vem do Senhor, que fez os céus e a terra.", ref:"Salmos 121:2"  },
      {texto:"Nunca esqueça as maravilhas que Deus faz.", ref:"Salmos 78:4"  },
      {texto:"Enquanto há vida, há esperança.", ref:"Eclesiastes 9:4"  },
      {texto:"Deus reina em minha vida.", ref:"Salmos 99:1"  },
      {texto:"O amor de Deus é melhor que a vida.", ref:"Salmos 63:3"  },
      {texto:"Deus não é como eu penso. Ele é amor.", ref:"1 João 4:8"  },
      {texto:"Confiarei na misericórdia de Deus eternamente.", ref:"Salmos 52:8"  },
      {texto:"O Senhor dá força ao seu povo: o Senhor abençoa com paz ao seu povo.", ref:"Salmos 29:11"  },
      {texto:"Ele sabe os segredos do seu coração.", ref:"Salmos 44:21"  },
      {texto:"Não te deixes vencer pelo mal, mas vence o mal com o bem.", ref:"Romanos 12:21"  },
      {texto:"Eis que Deus não rejeita ao íntegro, nem toma pela mão os malfeitores.", ref:"Jó 8:20"  },
      {texto:"Obedecer é melhor que sacrificar.", ref:"I Samuel 15:22"  },
      {texto:"A graça do Senhor Jesus seja com todos.", ref:"Apocalipse 22:21"  },
      {texto:"Olha para os céus e conta as estrelas, se é que o podes.", ref:"Gênesis 15:5"  },
      {texto:"O amor de Deus dura para sempre.", ref:"Salmos 118:1"  },
      {texto:"Isto é que vos peço, que vosso amor cresça cada vez mais.", ref:"Felipenses 1:9"  },
      {texto:"Felizes são os que ouvem a palavra de Deus e a guardam!", ref:"Lucas 11:28"  },
      {texto:"O choro pode durar uma noite, mas a alegria vem pela manhã.", ref:"Salmos 30:5"  },
      {texto:"E conhecereis a verdade e a verdade vos libertará.", ref:"João 8:32"  },
      {texto:"Deixo-vos a minha paz. A minha paz vos dou.", ref:"João 14:27"  },
      {texto:"Se Cristo vos libertar, verdadeiramente sereis livres.", ref:"João 8:36"  },
      {texto:"Tu os guardarás, SENHOR; desta geração os livrarás para sempre.", ref:"Salmos 12:7"  },
      {texto:"O Senhor é o meu pastor e nada me faltará.", ref:"Salmos 23:1"  },
      {texto:"As más companhias corrompem os bons costumes.", ref:"I Coríntios 15:33"  },
      {texto:"A resposta branda desvia o furor.", ref:"Provérbios 15:1"  },
      {texto:"Deus é amor.", ref:"I João 4:8"  },
      {texto:"Tudo sofre, tudo crê, tudo espera, tudo suporta.", ref:"I Coríntios 13:7"  },
      {texto:"A doçura no falar aumenta o saber.", ref:"Provérbios 16:23"  },
      {texto:"Deus disse: de maneira alguma te deixarei, nunca, jamais te abandonarei.", ref:"Hebreus 13:5"  },
      {texto:"A boca fala do que está cheio o coração.", ref:"Mateus 12:34"  },
      {texto:"As muitas águas não podem apagar este amor, nem os rios afogá-lo.", ref:"Cânticos 8:7"  },
      {texto:"Lâmpada para os meus pés é a tua palavra. E luz para o meu caminho.", ref:"Salmos 119:105"  },
      {texto:"Chegai-vos a Deus, e Ele se chegará a vós.", ref:"Tiago 4:8"  },
      {texto:"Amar a Deus sobre todas as coisas.", ref:"Mateus 22:37"  },
      {texto:"Se algum de vocês está sofrendo, ore.", ref:"Tiago 5:13"  },
      {texto:"Não separe o homem o que Deus uniu.", ref:"Marcos 10:9"  },
      {texto:"Agindo Deus, quem impedirá?", ref:"Isaías 43:13"  },
      {texto:"Perto está o Senhor dos que têm o coração quebrantado...", ref:"Salmos 34:18"  },
      {texto:"Porque vivemos por fé, e não pelo que vemos.", ref:"2 Coríntios 5:7"  },
      {texto:"E vós, irmãos, não vos canseis de fazer o bem.", ref:"2 Tessalonicenses 3:13"  },
      {texto:"Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos.", ref:"Provérbios 16:3"  },
      {texto:"Como é bom e agradável quando os irmãos convivem em união!", ref:"Salmos 133:1"  }
      
      
  ]
  }

  mudaFrase(){

    let multiFrase = Math.floor(Math.random() * this.frases.length)

   
      

      this.setState({

        frase: this.frases[multiFrase].texto,

        referencia:this.frases[multiFrase].ref
  
      })
  
    
    
  }
  
  
  render(){

    

    return (

      <View style={styles.container}>

          <View style={styles.alinhaImg}>
              <Image
                style={styles.imagem}
                source={require('./src/biblia.png')}
            />
          </View>
          

        <View style={styles.textos}>

          <Text style={styles.texto1}>{this.state.frase}</Text>
          <Text style={styles.texto2}>{this.state.referencia}</Text>
          
        </View>
        <View style={styles.botaoAlinha}>
          <TouchableOpacity

              style={styles.botao}
              onPress={()=>this.mudaFrase()}>

              <Text style={styles.botaoText}>Frase do dia</Text>

          </TouchableOpacity>

        </View>
        
        
      </View>

    );
  }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#262626'
    },
    texto1:{
      fontWeight:'bold',
      color:'#fff',
      alignItems:'center'

    },
    texto2:{
      color:'#fff',
      alignItems:'center'

    },
    imagem:{
      width: 200,
      height:150
    },
    textos:{
      alignItems:'center',
      marginTop:120
      
    },
    botaoText:{
      color: '#fff',
      alignItems:'center',
    },
    alinhaImg:{
      alignItems:'center',
      marginTop:50

    },
    botao:{
      alignItems:'center',
      justifyContent:'center',
      width: 125,
      height: 40,
      borderWidth:0.2,
      borderColor:'#fff',
      borderRadius:25,
      marginTop:50,
      backgroundColor: '#D9A918'

    },
    botaoAlinha:{
      alignItems:'center',
      justifyContent:'center',
    }
  })

export default fraseDia;