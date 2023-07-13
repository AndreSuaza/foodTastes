
## Description

[Nest](https://github.com/nestjs/nest) Bienvenidos al proyecto TastesFood.

## Instalación

```bash
$ yarn install

# database
Se debe crear el archivo .env con la variable de entorno URL_DB que tiene la cadena de conexión de mongodb ejemplo:
URL_DB="mongodb+srv://<user>:<password>@mongodb.net/tastes"
```

## Correr la Aplicación

```bash
# Correr
$ yarn run start

# Correr en modo Debug y Cambios en tiempo real 
$ yarn run start --debug --watch
```

## Funcionalidad
```bash
Se creó un servicio para que con preferencias de comida te de sugerencias de platos y restaurantes 

servicio: /tastes?tastes=””

Para consumir el servicio es necesario enviar por Query parameters las preferencias de comidas del usuarios 

#Preferencia 
/tastes?tastes=cebolla 
En esta caso el servicio te retornara los platos que contengan cebolla

Tambien se pueden enviar varias separadas por ( , ) 
#Preferencias 
/tastes?tastes=cebolla, vegana 
El servicio te retornara los platos que contengan cebolla y/o sean del tipo de comida vegana y los restaurantes donde se encuentren disponibles 
```

## Documentacion

(https://docs.nestjs.com/).

## Soporte

(https://docs.nestjs.com/support).

## Licensia 

Nest is [MIT licensed](LICENSE).
