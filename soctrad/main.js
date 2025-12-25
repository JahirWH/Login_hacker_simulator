/**
 * Script principal de la aplicación
 * Inicializa la aplicación después de que el DOM esté cargado
 */

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    try {
        log('Inicializando aplicación');
        
        // Inicializar datos generados
        initializeData();
        
        // Configurar event listeners
        setupEventListeners();
        
        // Inicializar animaciones
        initLoadingAnimation();
        initAllDragAnimations();
        initChatAnimation();
        
        log('Aplicación inicializada exitosamente');
    } catch (error) {
        logError('Error durante la inicialización', error);
    }
});

// Evento que se ejecuta cuando la ventana está completamente cargada
window.addEventListener("load", function() {
    try {
        const loadingElement = document.getElementById(CONFIG.DOM_ELEMENTS.LOADING);
        if (loadingElement) {
            loadingElement.classList.toggle("loading2");
            log('Pantalla de carga ocultada');
        }
    } catch (error) {
        logError('Error en evento load', error);
    }
});

// Manejo de errores global
window.addEventListener('error', function(event) {
    logError('Error global no capturado', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
});

// Advertencia para console
console.log('%c%s', 'color: red; font-size: 24px;', 'DAKt - Hacker Simulator');
console.log('%c%s', 'color: green; font-size: 16px;', 'Aplicación cargada correctamente');
