# Proyecto
El proyecto fue realizado usando angular para frontend, spring boot para backend y postgresql como base de datos
# Componentes
El proyecto cuenta con 5 componentes
*Courses: Muestra todos los cursos disponibles
*individual-course: Muestra detalles de cada curso al hacer click sobre cualquiera de ellos
*courses-categories: Permite filtrar cursos por categorías, usando spring boot para generar el listado de cursos de cada categoría
*Register: Permite registrarse usando una dirección de correo que puede o no ser existente y una contraseña o a través de google
* login: Permite ingresar con los datos de registro para ver los detalles de los cursos
*add-course: Permite agregar cursos usando un formulario hecho en angular y spring boot para guardar los datos en postgres

# Servicios
El proyecto cuenta con dos servicios, uno para gestionar los cursos, en donde se encuentran los métodos get y post otro para gestionar los usuarios, el cual usa firebase para el registro y autenticación de usuarios.

# Diseño
El proyecto es responsivo, por lo que cuenta con vista para mobil(<600px), tablets(<1000px) y equipos(>=1000px). Se usó lenguaje scss e imágenes tomadas de flaticon.

#Demostración
A continuación se deja un video de muestra de la aplicación funcionando:
https://www.youtube.com/watch?v=-1fyINoBXsw


