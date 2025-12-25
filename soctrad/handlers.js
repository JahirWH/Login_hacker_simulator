/**
 * Manejadores de eventos principales
 * Funciones que manejan las interacciones del usuario
 */

/**
 * Maneja el envío del formulario de acceso
 * @param {Event} event - Evento del formulario
 */
function handleLogin(event) {
    event.preventDefault();

    const usuario = document.getElementById(CONFIG.DOM_ELEMENTS.USER_INPUT)?.value || '';
    const contraseña = document.getElementById(CONFIG.DOM_ELEMENTS.PASSWORD_INPUT)?.value || '';

    // Validar credenciales
    if (usuario === CONFIG.AUTH.username && contraseña === CONFIG.AUTH.password) {
        handleAccessGranted();
    } else {
        handleAccessDenied();
    }
}

/**
 * Maneja el acceso concedido
 */
function handleAccessGranted() {
    const closeButton = document.getElementById(CONFIG.DOM_ELEMENTS.ACCESS_FORM);
    const introSection = document.getElementById(CONFIG.DOM_ELEMENTS.ACCESS_GRANTED);
    const secureSection = document.getElementById(CONFIG.DOM_ELEMENTS.SECURE_SECTION);

    try {
        // Ocultar formulario
        if (closeButton) closeButton.style.display = 'none';

        // Mostrar mensaje de acceso concedido
        if (introSection) {
            introSection.style.display = "block";
            introSection.style.opacity = "1";
        }

        log('Acceso concedido');

        // Mostrar sección segura después de timeout
        executeAfter(() => {
            if (secureSection) {
                secureSection.style.opacity = "1";
                secureSection.style.display = "block";
            }
        }, CONFIG.TIMEOUTS.ACCESS_GRANTED_REVEAL);

    } catch (error) {
        logError('Error en handleAccessGranted', error);
    }
}

/**
 * Maneja el acceso denegado
 */
function handleAccessDenied() {
    const denegadoSection = document.getElementById(CONFIG.DOM_ELEMENTS.ACCESS_DENIED);

    try {
        if (denegadoSection) {
            denegadoSection.style.display = "block";
            log('Acceso denegado - Redirigiendo en 3 segundos');

            // Redirigir después de timeout
            executeAfter(() => {
                window.location.href = "./";
            }, CONFIG.TIMEOUTS.REDIRECT_DENIED);
        }
    } catch (error) {
        logError('Error en handleAccessDenied', error);
    }
}

/**
 * Abre/cierra el formulario de acceso
 */
function toggleAccessForm() {
    const accessForm = document.getElementById(CONFIG.DOM_ELEMENTS.ACCESS_FORM);
    toggleElement(CONFIG.DOM_ELEMENTS.ACCESS_FORM);
}

/**
 * Abre/cierra la sección de cámaras
 */
function toggleCameras() {
    const cameraSection = document.getElementById(CONFIG.DOM_ELEMENTS.CAMERA_SECTION);
    
    if (!cameraSection) {
        logError('Sección de cámaras no encontrada');
        return;
    }

    toggleElement(CONFIG.DOM_ELEMENTS.CAMERA_SECTION);

    // Añadir clase flex a elementos de cámara
    const camerasImg = document.getElementsByClassName("cameras_img");
    for (let i = 0; i < camerasImg.length; i++) {
        camerasImg[i].classList.toggle("flex");
    }
}

/**
 * Abre/cierra la sección de datos generados
 */
function toggleDataOverflow() {
    toggleElement(CONFIG.DOM_ELEMENTS.DATA_OVERFLOW);
}

/**
 * Abre/cierra el modal de enlaces
 */
function toggleModal() {
    toggleElement(CONFIG.DOM_ELEMENTS.MODAL);
}

/**
 * Cierra la sección segura
 */
function closeSecureSection() {
    toggleElement(CONFIG.DOM_ELEMENTS.SECURE_SECTION, false);
    toggleElement(CONFIG.DOM_ELEMENTS.ACCESS_GRANTED, false);
}

/**
 * Obtiene y muestra la dirección IP
 * @param {Object} obj - Objeto con la IP del servidor ipify
 */
function handleIpResponse(obj) {
    try {
        const ipValue = obj?.ip || 'N/A';
        
        CONFIG.DOM_ELEMENTS.IP_DISPLAY.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = ipValue;
                element.textContent = ipValue;
            }
        });

        log('IP obtenida', ipValue);
    } catch (error) {
        logError('Error al procesar respuesta de IP', error);
    }
}

/**
 * Alias para handleIpResponse (compatibilidad con callback global)
 */
function get_ip(obj) {
    handleIpResponse(obj);
}

/**
 * Carga y muestra los datos iniciales
 */
function initializeData() {
    try {
        // Generar número aleatorio de localización
        const randomNum = generarNumeroAleatorio();
        const randomNumElement = document.getElementById(CONFIG.DOM_ELEMENTS.RANDOM_NUM);
        if (randomNumElement) {
            randomNumElement.innerText = randomNum;
        }

        // Generar datos del usuario
        actualizarDatosGenerados();

        log('Datos inicializados');
    } catch (error) {
        logError('Error al inicializar datos', error);
    }
}

/**
 * Configura los event listeners principales
 */
function setupEventListeners() {
    try {
        // Formulario de acceso
        const sendBtn = document.querySelector('button.send[onclick*="send"]');
        if (sendBtn) {
            sendBtn.addEventListener('click', handleLogin);
        }

        // Botón X del formulario
        const closeFormBtn = document.querySelector('.acess_nav .btn');
        if (closeFormBtn) {
            closeFormBtn.addEventListener('click', toggleAccessForm);
        }

        // Botones de secciones
        const btnLinks = document.querySelectorAll('button.btn');
        btnLinks.forEach(btn => {
            if (btn.textContent === 'X') {
                const onclick = btn.getAttribute('onclick');
                if (onclick?.includes('overflow')) {
                    btn.addEventListener('click', toggleDataOverflow);
                } else if (onclick?.includes('acess')) {
                    btn.addEventListener('click', toggleAccessForm);
                } else if (onclick?.includes('camara')) {
                    btn.addEventListener('click', toggleCameras);
                } else if (onclick?.includes('link')) {
                    btn.addEventListener('click', toggleModal);
                }
            }
        });

        log('Event listeners configurados');
    } catch (error) {
        logError('Error al configurar event listeners', error);
    }
}
