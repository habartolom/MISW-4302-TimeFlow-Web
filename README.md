# TimeFlow Web

Maquetación web de **TimeFlow**, aplicación para gestión y control de tiempo en presentaciones profesionales. Permite configurar secciones, revisar el historial de sesiones y ajustar alertas desde una interfaz web moderna.

---

## Demo

La aplicación está publicada en GitHub Pages:

**[https://habartolom.github.io/MISW-4302-TimeFlow-Web/](https://habartolom.github.io/MISW-4302-TimeFlow-Web/)**

---

## Rutas disponibles

| Ruta | Vista | Descripción |
|------|-------|-------------|
| `/` | — | Redirige automáticamente a `/login` |
| `/login` | Inicio de sesión | Acceso con correo y contraseña |
| `/register` | Crear cuenta | Registro de usuario nuevo |
| `/dashboard` | Dashboard | Estadísticas generales, evolución temporal y sesiones recientes |
| `/historial` | Historial de Sesiones | Listado de sesiones con filtros por fecha y estado |
| `/asignar-tiempo` | Asignar Tiempo | Configuración de duración por sección de presentación |
| `/alertas` | Configuración de Alertas | Activación de alertas y tipo de notificación por defecto |
| `/cuenta` | Mi Cuenta | Perfil de usuario y datos de acceso |

---

## Correr el proyecto en local

### Requisitos previos

- **Node.js** v18 o superior — [descargar](https://nodejs.org)
- **npm** v9 o superior (incluido con Node.js)

Verifica tu instalación:
```bash
node -v
npm -v
```

### Pasos

**1. Clona el repositorio**
```bash
git clone https://github.com/habartolom/MISW-4302-TimeFlow-Web.git
cd MISW-4302-TimeFlow-Web
```

**2. Instala las dependencias**
```bash
npm install
```

**3. Inicia el servidor de desarrollo**
```bash
npm start
```

**4. Abre el navegador**

Navega a [`http://localhost:4200`](http://localhost:4200). La aplicación se recarga automáticamente al guardar cambios en el código.

---

## Stack tecnológico

| Tecnología | Versión |
|------------|---------|
| Angular | 21.2 |
| Angular Material | 21.2 |
| TypeScript | 5.9 |
| Inter (fuente) | Google Fonts |
