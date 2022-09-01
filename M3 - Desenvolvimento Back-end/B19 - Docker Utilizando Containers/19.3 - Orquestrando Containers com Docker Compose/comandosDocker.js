P2 = 'Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.'

R2 = ' docker run -d --name site-trybe -p 4545:80 -v "/media/deivid/394080B278DBED9A18/Exercicios_back_end/exercicios_trybe/B19 Docker/19.3 - Orquestrando Containers com Docker Compose/missao_trybe.html:/usr/local/apache2/htdocs" httpd:2.4'


P3 = 'Após criar o container acesse a página HTML que está rodando no servidor em seu browser.'

R3 = 'http://localhost:4545/missao_trybe.html'


P5 = 'Obtenha o id do container httpd:2.4'

R5 = 'docker ps'


P6 = 'Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host.'

R6 = '  docker inspect d95598d8'

P7 = 'Agora pare o container httpd:2.4'

R7 = 'docker stop d95598d8'


P8 = 'Exclua o seu container'

R8 = 'docker rm d95598d8'


P9 = 'Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar'

R9 = 'ls -la'


P10 = 'Obtenha o IMAGE ID do servidor;'

R10 = 'docker images'


P11 = 'Depois de obter o IMAGE ID, exclua a imagem.'

R11 = 'docker image rm fa39221a'