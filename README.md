# App de consulta del clima

Este es un proyecto de aplicación web de consulta del tiempo climático de una locación determinada. El mismo está desarrollado con react js y extrae los datos de dos apis:

- Api de consulta del clima [openweathermap](https://openweathermap.org/current).
- Api de geolocalización [openweathermap](https://openweathermap.org/api/geocoding-api).

Existe una diferencia de nombres, en el repositorio encontraran este proyecto bajo el nombre de piweather, mientras que en el sitio desplegado tendrá el nombre de monkeyweather.

Sitio desplegado: [ir al sitio](https://monkeyweather.vercel.app/)

## NPM

![](https://res.cloudinary.com/drdgu83bp/image/upload/v1678719003/Assets/npm_logo_k9cjrx.png)

npm (Node Package Manager) es, como su propio nombre indica, el gestor de paquetes, módulos o librerías que nos proporciona Nodejs. Se trata de una herramienta que nos facilita el trabajo con librerías permitiéndonos instalar, actualizar y eliminar librerías de forma relativamente sencilla y automatizar la gestión de dependencias.

Para comenzar a trabajar con npm utilizaremos npm cli, el módulo que gestiona la consola de npm y desde la que correremos los comandos que necesitemos. Este módulo viene incorporado con Nodejs, por lo que al instalar Nodejs adquiriremos también NPM.

Para comprobar si tenemos instalado Nodejs podemos escribir en nuestra consola el siguiente comando:

```
node -v
```

Para comprobar si ya tenemos npm instalado correremos un comando similar:

```
npm -v
```

En caso de que no tengamos instalado npm o Nodejs, procederemos a instalar Node.js para obtener ambos.
Recomiendo seguir los pasos de instalación indicados en el sitio oficial:
[Node.js.org](https://nodejs.org/en/download/package-manager/#windows-1)

## Correr proyecto

Una vez instalado npm, siga estos sencillos pasos:

- Utilizar el comando cd en la consola para ubicarte la nueva carpeta donde ubicaremos el proyecto.
- Clonar repositorio escribiendo en la consola el siguiente script:

```
git clone https://github.com/JoaquinBohn/piweather.git
```

- Escribir el siguiente código para instalar todas las dependencias:

```
npm install
```

- Finalmente correr el proyecto escribiendo:

```
npm start
```

## Acerca de monkeyweather

La app es muy sencilla y solo cuenta con una función: brindar los datos del tiempo actuales de una locación dada. Se puede elegir entre dos sistemas de unidades: imperial y métrica. El usuario ingresa el nombre de una locación y de encontrarse dicha locación la app despliega los principales datos del tiempo: temperatura, descripción, sensación térmica, velocidad del viento y humedad. Adicionalmente se pueden visualizar más detalles del tiempo y se puede descargar un archivo .txt con todos estos datos.

### Algunas aclaraciones sobre las locaciones

Se ha notado que la api de búsqueda de locaciones puede devolver datos diferentes a los deseados, como puede ser que el usuario ingrese una locación y se muestre otra totalmente distinta. Este problema corresponde a la api de geolocalización encargada de obtener las coordenadas necesarias para la api del clima y hasta la fecha no he encontrado una solución satisfactoria.

Otro detalle sobre las locaciones es que puede variar el nombre buscado al nombre que se muestra en pantalla. El caso más común es el de la Ciudad Autonoma de Buenos Aires que suele mostrar nombres de barrios en su lugar, como por ejemplo Villa Crespo. Sin embargo no se trata del error anteriormente mencionado, esta diferencia de nombres se debe a que en ciudades tan grandes se obtienen datos de varias zonas del mismo, la app está programada para seleccionar los datos del primero.
