/*INICIO CONFIG TRANFERENCIA AULA*/
function verificaTecla3(){
		    document.addEventListener('keydown', historiaKD);
		}


function historiaKD(){
		//A = 65; S = 83; D = 68; F = 70; G = 71; H = 72; Z = 90;
			var tecla3 = window.event.keyCode;
			if(tecla3 == 40){
				  responsiveVoice.speak('Clique A para acessar a aula sobre Dia do Meio Ambiente, clique S para acessar a aula sobre o Povoamento Brasileiro, clique D para acessar a aula sobre Pré Historia, clique F para acessar a aula sobre Expansão Maritima Europeia, clique control para voltar ao menu principal', 'Brazilian Portuguese Female');
			}else if(tecla3 == 65){
				responsiveVoice.speak("Você acessou a aula de Meio Ambiente, para saber mais das nossas configurações clique enter", 'Brazilian Portuguese Female');
				window.location.href = 'meio_ambiente.html';				
		} else if(tecla3 == 17){
				responsiveVoice.speak("Você voltou a tela inicial, para saber dos conteúdos tecle seta para baixo", 'Brazilian Portuguese Female');
				window.location.href = '../../index.html'
		}else if(tecla3 == 83){
				responsiveVoice.speak("Você acessou a aula de Povoamento Brasileiro, para saber mais das nossas configurações clique enter", 'Brazilian Portuguese Female');
				window.location.href = 'povoamento_brasileiro.html';
		}else if(tecla3 == 68){
				responsiveVoice.speak("Você acessou a aula de Pré-História, para saber mais das nossas configurações clique enter", 'Brazilian Portuguese Female');
				window.location.href = 'pre_historia.html';
		}
	}
			verificaTecla3()
/*FIM CONFIG TRANFERENCIA AULA*/