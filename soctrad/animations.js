/**
 * Manejador de animaciones y efectos visuales
 * Centraliza todas las animaciones de la aplicación
 */

/**
 * Configura y ejecuta la animación de carga inicial
 */
function initLoadingAnimation() {
    try {
        const loadingElement = document.getElementById(CONFIG.DOM_ELEMENTS.LOADING);
        if (loadingElement) {
            executeAfter(() => {
                loadingElement.classList.add("loading2");
                log('Animación de carga completada');
            }, CONFIG.TIMEOUTS.LOADING);
        }
    } catch (error) {
        logError('Error en animación de carga', error);
    }
}

/**
 * Anima la escritura de mensajes en el chat
 * @param {string} mensaje - Mensaje a escribir
 * @param {function} callback - Función a ejecutar al terminar
 */
function escribirMensaje(mensaje, callback) {
    const chatElement = document.getElementById(CONFIG.DOM_ELEMENTS.CHAT);
    
    if (!chatElement) {
        logError('Elemento de chat no encontrado');
        return;
    }

    const p = document.createElement('p');
    chatElement.appendChild(p);
    
    let i = 0;
    
    function escribir() {
        p.textContent = mensaje.slice(0, i) + (i % 2 === 0 ? '|' : '');
        
        if (i < mensaje.length) {
            i++;
            setTimeout(escribir, 50); // Velocidad de escritura
            chatElement.scrollTop = chatElement.scrollHeight;
        } else {
            p.textContent = mensaje;
            if (callback) callback();
        }
    }
    
    escribir();
}

/**
 * Muestra mensajes secuencialmente en el chat
 * @param {Array} mensajes - Array de mensajes
 * @param {number} idx - Índice actual
 */
function mostrarMensajesSecuencialmente(mensajes, idx = 0) {
    if (idx < mensajes.length) {
        escribirMensaje(mensajes[idx], () => {
            mostrarMensajesSecuencialmente(mensajes, idx + 1);
        });
    }
}

/**
 * Inicia la animación del chat con mensajes predefinidos
 */
function initChatAnimation() {
    try {
        const mensajes = [
            "Добро пожаловать в инструменты, необходимые для получения анонимной информации от разных пользователей, не злоупотребляйте с первого раза;)",
            "01101100 01100001 00100000 01100101 01100100 01110101 01100011 01100001 01100011 01101001 01101111 01101110 00100000 01100101 01110011 00100000 01100101 01101100 00100000 01100011 01100001 01101101 01101001 01101110 01101111 00100000 01100001 00100000 01101100 01100001 00100000 01110000 01100001 01111010"
        ];
        
        mostrarMensajesSecuencialmente(mensajes);
        log('Chat animation iniciado');
    } catch (error) {
        logError('Error en animación del chat', error);
    }
}

/**
 * Configura animaciones de arrastrar elementos
 * @param {string} wrapperSelector - Selector del contenedor
 * @param {string} headerSelector - Selector del encabezado (donde agarrar)
 */
function setupDragAnimation(wrapperSelector, headerSelector) {
    try {
        const wrapper = document.querySelector(wrapperSelector);
        const header = wrapper?.querySelector(headerSelector);

        if (!wrapper || !header) {
            logError(`Elementos no encontrados: ${wrapperSelector}, ${headerSelector}`);
            return;
        }

        function onDrag({ movementX, movementY }) {
            const getStyle = window.getComputedStyle(wrapper);
            const leftVal = parseInt(getStyle.left) || 0;
            const topVal = parseInt(getStyle.top) || 0;
            
            wrapper.style.left = `${leftVal + movementX}px`;
            wrapper.style.top = `${topVal + movementY}px`;
        }

        header.addEventListener("mousedown", () => {
            header.classList.add("active");
            header.addEventListener("mousemove", onDrag);
        });

        document.addEventListener("mouseup", () => {
            header.classList.remove("active");
            header.removeEventListener("mousemove", onDrag);
        });

        log('Drag animation configurado para', wrapperSelector);
    } catch (error) {
        logError('Error en configuración de drag animation', error);
    }
}

/**
 * Inicializa todas las animaciones de arrastrar
 */
function initAllDragAnimations() {
    try {
        // Formulario de acceso
        setupDragAnimation(".acess_div", ".acess_div nav");

        // Sección de cámaras
        setupDragAnimation(".section_camera", ".section_camera div");

        // Contenedor de cámaras
        setupDragAnimation(".container_cameras", ".container_cameras nav");

        log('Todas las animaciones de drag inicializadas');
    } catch (error) {
        logError('Error al inicializar drag animations', error);
    }
}

/**
 * Añade efecto de desvanecimiento a un elemento
 * @param {string} elementId - ID del elemento
 * @param {number} duration - Duración en segundos
 */
function fadeIn(elementId, duration = 1) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.style.opacity = "0";
    element.style.display = "block";
    element.style.transition = `opacity ${duration}s ease-in`;

    setTimeout(() => {
        element.style.opacity = "1";
    }, 10);
}

/**
 * Desvanece un elemento
 * @param {string} elementId - ID del elemento
 * @param {number} duration - Duración en segundos
 */
function fadeOut(elementId, duration = 1) {
    const element = document.getElementById(elementId);
    if (!element) return;

    element.style.transition = `opacity ${duration}s ease-out`;
    element.style.opacity = "0";

    setTimeout(() => {
        element.style.display = "none";
    }, duration * 1000);
}
