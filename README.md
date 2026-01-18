# Rick And Morty App

RICK AND MORTY APP

Aplicación desarrollada en React que consume la API pública *“The Rick and Morty API”* para listar personajes y visualizar su información detallada.


## Descripción General

La aplicación obtiene los datos desde la API pública: https://rickandmortyapi.com/documentation y muestra un listado de personajes con información básica, permitiendo acceder al detalle completo de cada uno mediante navegación entre vistas.

## Funcionalidades

- Listado de personajes
- Búsqueda y filtrado de personajes por nombre y por género _(la api no proporcionaba filtro de locacización)_
- Gestión de personajes favoritos
- Navegación entre páginas mediante React Router

## Arquitectura

### "Capa" de acceso a datos

📁 src/api
📁 src/services

- Centraliza la configuración de Axios
- Define la URL base de la API

### "Capa" de lógica de negocio

📁 src/services
📁 src/context

_Aquí se hacen las llamadas y el tratado de datos antes de su uso en los componentes._ *Ejemplos:*

- Maneja el estado global de favoritos y los métodos de añadir o quitar un favorito
- Métodos para obtener los personajes aplicando filtros.

### "Capa" de presentación

📁 src/components

Aquí están los componentes funcionales de la aplicación y modularizados para poder ser reutilizados en otra parte de la aplicación. Ejemplos:

- *CharacterCard*: Muestra información básica de un personaje
- *CharacterPagination*: Controla la paginación
- *NavigationBar*: Header y navegación principal

###  Páginas

📁 src/pages

Las páginas representan vistas completas de la aplicación:

- *Home*: Listado de personajes
- *CharacterPage*: Detalle de un personaje
- *FavoriteCharactersPage*: Personajes favoritos


###  Enrutado y navegación

📁 App.jsx

- Uso de React Router DOM
- Definición de rutas
- Navegación entre páginas usando navigate

### Estilos

📁 styles
📁 index.css

Tailwind CSS para estilos rápidos y utilitarios y  Material UI para componentes visuales consistentes


## Tecnologías y librerías utilizadas

- React / Vite
- JavaScript
- Axios
- React Router DOM
- Context API
- Material UI
- Tailwind CSS
- ESLint

## Ejecución del proyecto

- Se requiere Node.js (18 o superior)
- npm install
- npm run dev
- La aplicación estará disponible en: http://localhost:5173


## Posibles mejoras y extensiones

> Mejoras funcionales:

- Cacheo de resultados
- Ordenación de personajes

> Mejoras técnicas:

- Migración a TypeScript
- Uso de custom hooks


## Autor

Proyecto desarrollado por Natalia Zarzuela Giráldez
