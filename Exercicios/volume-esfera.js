/*
# Exercício 11
## Volume de uma esfera

Para calcular o volume de uma esfera, utilizamos a seguinte fórmula:

$$ v = 4/3 *pi *r ^ 3 $$

onde:

**v:** volume da esfera \
**d:** diâmetro da esfera

Faça um programa que calcula o volume de uma esfera a partir de seu DIÂMETRO. 
Lembre-se que o DIÂMETRO de uma esfera é sempre o dobro do raio.

#### Exemplo:

Considerando uma esfera com raio 3, ou seja $d = 6$:

$$ v = \frac{4}{3} * 3 ^ 3 $$
$$ v = \frac{4}{3} * 27 $$
$$ v = \frac{108}{3} $$
$$ v = 36 pi $$

Imprima uma mensagem no seguinte formato com a sua resposta:
"O volume de uma esfera de raio 3 é 36 PI"
*/

const raio = 3;

const volume = 4 / 3 * raio ** 3;
console.log(`O volume de uma esfera de raio ${raio} é de ${volume} PI`);