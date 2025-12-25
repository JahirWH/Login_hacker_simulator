# DAKt - Hacker Simulator 🔐

Simulador interactivo de login estilo "hacker" con interfaz retro-futurista. Una aplicación educativa para demostración de tecnologías web modernas.

## 🎯 Características

### Core Features

- **Interfaz Hacker Estilizada**: Diseño retro-futurista con animaciones
- **Sistema de Login**: Formulario interactivo con validación
- **Generador de Identidades**: Genera perfiles falsos aleatorios con:
  - Nombres completos
  - Edades
  - Géneros
  - Números de seguro social (SSN) falsos
  - Coordenadas de localización simuladas
- **IP Detection**: Detección automática de dirección IP pública
- **Visualización de Cámaras**: Galería de webcams públicas
- **Sistema de Chat**: Mensajes secuenciales con efecto de escritura

### Interactividad

- Arrastrar y soltar elementos (drag & drop)
- Modales y paneles emergentes
- Animaciones suaves y efectos visuales
- Respuesta en tiempo real a interacciones

## 📁 Estructura del Proyecto

```
soctrad/
├── index.html              # Archivo HTML principal
├── style.css               # Estilos CSS
├── config.js               # Configuración centralizada
├── utils.js                # Funciones de utilidad
├── handlers.js             # Manejadores de eventos
├── animations.js           # Efectos de animación
├── js.js                   # JavaScript heredado (optimizar)
├── main.js                 # Script de inicialización
├── particles.js            # Efectos de partículas
├── fngssn.class.php        # Generador SSN (PHP)
├── db.php                  # Base de datos (PHP)
│
├── backgrounds/            # Imágenes de fondo
├── air/                    # Recursos adicionales
└── [Múltiples archivos de imagen y fuente]
```

## 🔐 Credenciales de Acceso

Para entrar al simulador:

- **Usuario**: `none`
- **Contraseña**: `none`

> ⚠️ Estas credenciales son hardcodeadas para demostración. En producción, usar autenticación real.

## 🚀 Instalación

### Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web para servir archivos estáticos

### Pasos

1. **Clonar o descargar el proyecto**

```bash
git clone https://github.com/JahirWH/Login_hacker_simulator.git
cd soctrad
```

2. **Servir con un servidor local**

**Con Python 3:**

```bash
python -m http.server 8000
```

**Con Python 2:**

```bash
python -m SimpleHTTPServer 8000
```

**Con Node.js (http-server):**

```bash
npx http-server
```

3. **Acceder en el navegador**

```
http://localhost:8000/soctrad/
```

## 📖 Uso

### Estructura de Archivos

#### `config.js`

Centraliza todas las configuraciones:

```javascript
CONFIG.AUTH.username; // Usuario para acceso
CONFIG.AUTH.password; // Contraseña para acceso
CONFIG.TIMEOUTS; // Tiempos de espera
CONFIG.NAMES; // Nombres generables
CONFIG.DOM_ELEMENTS; // IDs de elementos DOM
```

#### `utils.js`

Funciones de utilidad:

```javascript
generarNombre(); // Genera nombre aleatorio
generarSSN(); // Genera SSN falso
generarEdad(); // Genera edad aleatoria
generarGenero(); // Genera género
actualizarDatosGenerados(); // Actualiza todos los datos
toggleElement(); // Muestra/oculta elementos
```

#### `handlers.js`

Manejadores de eventos:

```javascript
handleLogin(event); // Procesa login
handleAccessGranted(); // Acceso exitoso
handleAccessDenied(); // Acceso denegado
toggleCameras(); // Toggle de cámaras
toggleModal(); // Toggle de modal
```

#### `animations.js`

Efectos visuales:

```javascript
initLoadingAnimation(); // Anima carga inicial
setupDragAnimation(); // Configura drag & drop
fadeIn / fadeOut(); // Desvanecimiento
escribirMensaje(); // Efecto de escritura
```

## 🎨 Personalización

### Cambiar Credenciales

Edita en `config.js`:

```javascript
AUTH: {
    username: "tu_usuario",
    password: "tu_password"
}
```

### Agregar Más Nombres

En `config.js`, expandir arrays en `NAMES`:

```javascript
NAMES: {
    nombres: ["Nombre1", "Nombre2", ...],
    apellidos1: ["Apellido1", ...],
    apellidos2: ["Apellido2", ...]
}
```

### Cambiar Tiempo de Animaciones

En `config.js`, modificar `TIMEOUTS`:

```javascript
TIMEOUTS: {
    LOADING: 1500,
    REDIRECT_DENIED: 3000,
    ACCESS_GRANTED_REVEAL: 3000
}
```

### Cambiar Imagen de Fondo

En `style.css`:

```css
._back {
  background-image: url(backgrounds/tu_imagen.jpg);
}
```

## 🔧 Mejoras Realizadas

### Organización de Código

- ✅ Separación de responsabilidades
- ✅ Módulos especializados (config, utils, handlers, animations)
- ✅ Código documentado con JSDoc
- ✅ Gestión centralizada de configuración

### Manejo de Errores

- ✅ Try-catch blocks en funciones críticas
- ✅ Logging mejorado con timestamps
- ✅ Manejo de errores global
- ✅ Validaciones de elementos DOM

### Funcionalidades Mejoradas

- ✅ Sistema de logging
- ✅ Actualización automática de datos
- ✅ Event listeners más robustos
- ✅ Funciones reutilizables

### Accesibilidad

- ✅ Meta descripción agregada
- ✅ Atributos alt en imágenes
- ✅ Lenguaje HTML especificado (lang="es")
- ✅ Viewport meta tag

## 📝 Notas de Desarrollo

### Funciones Heredadas

El archivo `js.js` contiene código heredado que podría optimizarse:

- Funciones de cámara duplicadas (`showcam1-6`)
- Variables globales innecesarias
- Código comentado sin uso

**Recomendación**: Refactorizar para usar el sistema modular nuevo.

### APIs Externas

- **ipify API**: Para detección de IP pública
- **thispersondoesnotexist.com**: Para imágenes de personas falsas

### Dependencias

- Sin dependencias externas (vanilla JavaScript)
- Solo CSS nativo
- PHP opcional para funcionalidades backend

## 🔐 Seguridad

⚠️ **ADVERTENCIA**: Esta es una aplicación educativa/simulador.

- Las credenciales están hardcodeadas
- No es seguro para producción
- No contiene cifrado real
- Los datos generados son ficticios

Para uso en producción:

- Implementar autenticación real
- Usar JWT o sesiones seguras
- Cifrar datos sensibles
- Validar entrada en servidor
- Usar HTTPS

## 📱 Compatibilidad

| Navegador | Versión | Estado          |
| --------- | ------- | --------------- |
| Chrome    | 90+     | ✅ Completo     |
| Firefox   | 88+     | ✅ Completo     |
| Safari    | 14+     | ✅ Completo     |
| Edge      | 90+     | ✅ Completo     |
| IE 11     | -       | ❌ No soportado |

## 🐛 Problemas Conocidos

1. **Cámaras públicas**: Algunas URLs pueden estar caídas
2. **CORS**: Limitaciones al obtener datos de dominios externos
3. **Mobile**: Algunos efectos de drag pueden no funcionar perfectamente

## 🚧 Mejoras Futuras

- [ ] Traducción multiidioma
- [ ] Modo oscuro/claro
- [ ] Más efectos de partículas
- [ ] Sistema de puntuación
- [ ] Desafíos interactivos
- [ ] Estadísticas de sesión
- [ ] Guardado de perfil generado
- [ ] Soporte offline

## 📄 Licencia

Este proyecto es de código abierto para propósitos educativos.

## 👤 Autor

**JahirWH** - Creador original

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

**Hecho con ❤️ para fines educativos**
