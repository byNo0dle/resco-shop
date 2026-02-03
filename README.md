# Resco Shop (Evershop)

Este proyecto es una implementación de comercio electrónico basada en **Evershop**. A continuación se detallan los pasos para configurar y desplegar el entorno de desarrollo localmente.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu sistema antes de comenzar:

- **Node.js**: Versión 18 o superior recomendada.
- **PostgreSQL**: Base de datos requerida por Evershop.
- **Git**: Para clonar el repositorio.

## Instalación

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/byNo0dle/resco-shop.git
    cd resco-shop
    ```

2.  **Instalar dependencias**:

    Ejecuta el siguiente comando en la raíz del proyecto para instalar las librerías necesarias:

    ```bash
    npm install
    ```

## Configuración y Base de Datos

Antes de iniciar la aplicación, necesitas configurar la conexión a la base de datos PostgreSQL.

1.  **Crear la Base de Datos**:
    Asegúrate de que tu servicio de PostgreSQL esté corriendo y crea una base de datos vacía para el proyecto (por ejemplo, `resco_shop`).

2.  **Ejecutar el Setup de Evershop**:
    Este comando te guiará interactivamente para configurar la conexión a la base de datos y creará las tablas necesarias. También te permitirá crear tu cuenta de administrador.

    ```bash
    npm run setup
    ```

    Durante este proceso se te pedirá:
    - Host de la base de datos (ej. `localhost`)
    - Puerto (ej. `5432`)
    - Nombre de la base de datos
    - Usuario y contraseña de la base de datos
    - Información para crear el usuario admin

## Ejecución en Desarrollo

Para levantar el servidor de desarrollo con recarga en caliente (hot-reload):

```bash
npm run dev
```

Una vez iniciado, podrás acceder a la aplicación en:

- **Tienda (Frontend)**: [http://localhost:3000](http://localhost:3000)
- **Panel de Administración**: [http://localhost:3000/admin](http://localhost:3000/admin)

## Comandos Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run start`: Inicia el servidor en modo producción (requiere `npm run build` previo).
- `npm run setup`: Ejecuta el asistente de instalación y configuración de base de datos.
