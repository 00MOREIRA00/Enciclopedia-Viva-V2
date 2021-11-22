/*INICIO CONFIG TRANFERENCIA AULA*/
function verificaTecla4(){
		    document.addEventListener('keydown', meioambienteKD);
		}


function meioambienteKD(){
		//A = 65; S = 83; D = 68; F = 70; G = 71; H = 72; Z = 90;
			var tecla4 = window.event.keyCode;
			if(tecla4 == 13){
				  responsiveVoice.speak('Para iniciar audio conteúdo clique seta para cima, para pausar audio conteúdo clique seta para paixo ,para iniciar o quiz tecle espaço e para voltar ao menu tecle control', 'Brazilian Portuguese Female');
			}else if(tecla4 == 38){
				const audio = document.querySelector('audio')
					audio.play()			
			}else if (tecla4 == 40){
				const audio = document.querySelector('audio')
					audio.pause()	
			}else if (tecla4 == 32){
				responsiveVoice.speak('Você Inicio o Quiz tecle Enter para ouvir a primeira pergunta', 'Brazilian Portuguese Female');
				 window.location.href = 'perguntas/pergunta13.html'
			}else if (tecla4 == 17) {
				responsiveVoice.speak('Você voltou a tela anterior, tecle seta para baixo para saber os conteúdos', 'Brazilian Portuguese Female');
				 window.location.href = 'menu_historia.html'
			}
	}
			verificaTecla4()
/*FIM CONFIG TRANFERENCIA AULA*/