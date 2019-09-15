# problema_dos_filosofos

Estudo de processamento com administração de recursos.
Esse problema funciona da seguinte forma, em uma mesa estão sentados 5 filósofos, cada um possui um garfo porém
para poder comer, o filósofo deve utilizar 2 garfos. Dessa forma é preciso algum tipo de organização para que
todos possam comer.

<img src="https://github.com/jorgefortunatof/problema_dos_filosofos/blob/master/filo_01.PNG" width="400px">

# Funcionamento

Os filósofos em verde estão comendo e os garfos verdes são os que estão em uso, filosofos em vermelho estão com fome.
O algoritmo percorre cada filósofo e eles possuem uma chance de 40% de estarem com fome, caso eles fiquem com fome
e seus dois garfos estejam livres então eles comem, caso os garfos estejam ocupados eles esperam até que esteja livre
para comer.

<img src="https://github.com/jorgefortunatof/problema_dos_filosofos/blob/master/filo_02.PNG" width="400px">
