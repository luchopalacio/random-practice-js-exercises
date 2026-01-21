# Ejercicio: crear un conversor de Spinal Case

## Descripcion 

Ejercicio en JavaScript que utiliza **regex** para detectar si un texto contiene una letra mayúscula inmediatamente después de una letra minúscula o espacios y guiones bajos o medios entre palabras. Luego se convertira ese texto a Spinal Case (formato donde todas las palabras estan en minúscula y separadas por guiones).

### Ejemplos
```javascript
console.log(spinalCase("HolaComoEstas"));   //hola-como-estas
console.log(spinalCase("Implementando funciones de_expresiones--regularesO   'regex'"));    //implementando-funciones-de-expresiones-regulares-o-'regex'