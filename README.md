Documentación Marketcoin React API

Para empezar se creó un proyecto de creo de React; en el cual se adicionaron dos componentes principales; el primero TableCoin donde se generas los encabezados de la tabla, un filtro para buscar las criptomonedas, por medio del método map se genera una nueva columna en la tabla para mostrar todos los títulos guardados en un array; esto en el head de la tabla; en el body se  importa un componente llamado CoinRow; el cual permite la adición de cada criptomoneda generada por la obtención de la información de la API.

Para el componente CoinRow se realiza el consumo de la API de la siguiente manera. Se crea una nueva fila que a su vez contiene las columnas con la información de cada moneda; por ejemplo para la primera columna se utiliza el Template Literals {coin.image} para obtener la imagen de la criptomoneda. En la creación de este componente de utilizas los props coin e index que se generan desde el archivo App.JS.

Finalmente, en el APP.js se crea una función asíncrona que obtiene toda la información de la API y la almacena en la constante res. Se llama el componente TableCoin.

Para los estilos se utilizó la biblioteca Bootstrap para darle el fondo de color claro a la tabla; un margen y un hover que permite al usuario diferenciar con el mouse la selección de cada moneda.

En el archivo index.css se generaron los estilos del body con un fondo negro y un color blanco para los textos y para el input un fondo gris y en texto alineado en el centro.

