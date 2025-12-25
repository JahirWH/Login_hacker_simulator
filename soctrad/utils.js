/**
 * Utilidades y funciones auxiliares
 * Funciones reutilizables para la aplicación
 */

/**
 * Genera un nombre completo aleatorio
 * @returns {string} Nombre completo generado
 */
function generarNombre() {
    const { nombres, apellidos1, apellidos2 } = CONFIG.NAMES;

    const randn = Math.floor(Math.random() * nombres.length);
    const rand2 = Math.floor(Math.random() * apellidos1.length);
    const rand3 = Math.floor(Math.random() * apellidos2.length);

    return `${nombres[randn]} ${apellidos1[rand2]} ${apellidos2[rand3]}`;
}

/**
 * Genera un número de seguro social falso (formato: AAA-GG-SSSS)
 * @returns {string} SSN falso
 */
function generarSSN() {
    function randomDigits(n) {
        let str = '';
        for (let i = 0; i < n; i++) {
            str += Math.floor(Math.random() * 10);
        }
        return str;
    }

    // AAA: 001-899 (sin 666)
    let area = Math.floor(Math.random() * 899) + 1;
    if (area === 666) area = 665;

    let group = randomDigits(2);
    let serial = randomDigits(4);

    return area.toString().padStart(3, '0') + '-' + 
           group.padStart(2, '0') + '-' + 
           serial.padStart(4, '0');
}

/**
 * Genera una edad aleatoria dentro del rango configurado
 * @returns {number} Edad generada
 */
function generarEdad() {
    const { MIN, MAX } = CONFIG.AGE_RANGE;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

/**
 * Genera un género aleatorio
 * @returns {string} Género aleatorio
 */
function generarGenero() {
    return CONFIG.GENDERS[Math.floor(Math.random() * CONFIG.GENDERS.length)];
}

/**
 * Genera una coordenada de localización simulada
 * @returns {string} Coordenadas simuladas
 */
function generarLocalizacion() {
    const lat = (Math.random() * 180 - 90).toFixed(4);
    const lon = (Math.random() * 360 - 180).toFixed(4);
    return `${lat}, ${lon}`;
}

/**
 * Genera un número aleatorio decimal entre 1 y 999.999
 * @returns {string} Número formateado
 */
function generarNumeroAleatorio() {
    return (Math.random() * (999.999 - 1.000) + 1.000).toFixed(3);
}

/**
 * Actualiza todos los datos generados en la interfaz
 */
function actualizarDatosGenerados() {
    try {
        const nombre = generarNombre();
        const edad = generarEdad();
        const genero = generarGenero();
        const ssn = generarSSN();
        const localizacion = generarLocalizacion();
        const numero = generarNumeroAleatorio();

        // Actualizar elementos del DOM
        const elementos = CONFIG.DOM_ELEMENTS;

        if (document.getElementById(elementos.NAME_DISPLAY)) {
            document.getElementById(elementos.NAME_DISPLAY).textContent = nombre;
        }
        if (document.getElementById(elementos.AGE_DISPLAY)) {
            document.getElementById(elementos.AGE_DISPLAY).textContent = edad;
        }
        if (document.getElementById(elementos.SSN_DISPLAY)) {
            document.getElementById(elementos.SSN_DISPLAY).textContent = ssn;
        }
        if (document.getElementById(elementos.RANDOM_NUM)) {
            document.getElementById(elementos.RANDOM_NUM).innerText = numero;
        }

        console.log('Datos actualizados:', { nombre, edad, genero, ssn });
    } catch (error) {
        console.error('Error al actualizar datos:', error);
    }
}

/**
 * Oculta o muestra un elemento del DOM
 * @param {string} elementId - ID del elemento
 * @param {boolean} show - true para mostrar, false para ocultar
 */
function toggleElement(elementId, show = null) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Elemento no encontrado: ${elementId}`);
        return;
    }

    if (show === null) {
        // Toggle
        element.style.display = element.style.display === "none" ? "block" : "none";
    } else {
        element.style.display = show ? "block" : "none";
    }
}

/**
 * Añade una clase a un elemento
 * @param {string} elementId - ID del elemento
 * @param {string} className - Nombre de la clase
 */
function addClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add(className);
    }
}

/**
 * Remueve una clase de un elemento
 * @param {string} elementId - ID del elemento
 * @param {string} className - Nombre de la clase
 */
function removeClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove(className);
    }
}

/**
 * Toggle una clase en un elemento
 * @param {string} elementId - ID del elemento
 * @param {string} className - Nombre de la clase
 */
function toggleClass(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
    }
}

/**
 * Ejecuta una función después de un tiempo
 * @param {function} callback - Función a ejecutar
 * @param {number} delay - Tiempo en milisegundos
 * @returns {number} ID del timeout
 */
function executeAfter(callback, delay = 1000) {
    return setTimeout(callback, delay);
}

/**
 * Valida un formulario simple
 * @param {Object} formData - Objeto con los datos del formulario
 * @returns {boolean} true si es válido, false en caso contrario
 */
function validarFormulario(formData) {
    for (let key in formData) {
        if (!formData[key] || formData[key].trim() === '') {
            console.warn(`Campo vacío: ${key}`);
            return false;
        }
    }
    return true;
}

/**
 * Log seguro para desarrollo
 * @param {string} message - Mensaje a mostrar
 * @param {*} data - Datos adicionales
 */
function log(message, data = null) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`, data || '');
}

/**
 * Log de error
 * @param {string} message - Mensaje de error
 * @param {Error} error - Objeto de error
 */
function logError(message, error = null) {
    console.error(`[ERROR] ${message}`, error || '');
}
