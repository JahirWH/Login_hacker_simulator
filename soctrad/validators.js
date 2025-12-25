/**
 * Sistema de Validación de Formularios
 * Proporciona validaciones robustas para formularios
 */

const Validators = {
    /**
     * Valida que un campo no esté vacío
     * @param {string} value - Valor a validar
     * @param {string} fieldName - Nombre del campo para mensaje
     * @returns {string|null} Error message o null si es válido
     */
    required(value, fieldName = 'Campo') {
        if (!value || value.trim() === '') {
            return `${fieldName} es requerido`;
        }
        return null;
    },

    /**
     * Valida la longitud mínima
     * @param {string} value - Valor a validar
     * @param {number} min - Longitud mínima
     * @param {string} fieldName - Nombre del campo
     * @returns {string|null}
     */
    minLength(value, min, fieldName = 'Campo') {
        if (value && value.length < min) {
            return `${fieldName} debe tener al menos ${min} caracteres`;
        }
        return null;
    },

    /**
     * Valida la longitud máxima
     * @param {string} value - Valor a validar
     * @param {number} max - Longitud máxima
     * @param {string} fieldName - Nombre del campo
     * @returns {string|null}
     */
    maxLength(value, max, fieldName = 'Campo') {
        if (value && value.length > max) {
            return `${fieldName} no debe exceder ${max} caracteres`;
        }
        return null;
    },

    /**
     * Valida formato de email
     * @param {string} value - Email a validar
     * @returns {string|null}
     */
    email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
            return 'Formato de email inválido';
        }
        return null;
    },

    /**
     * Valida que sea un número
     * @param {string} value - Valor a validar
     * @param {string} fieldName - Nombre del campo
     * @returns {string|null}
     */
    number(value, fieldName = 'Campo') {
        if (value && isNaN(value)) {
            return `${fieldName} debe ser un número`;
        }
        return null;
    },

    /**
     * Valida un rango numérico
     * @param {string} value - Valor a validar
     * @param {number} min - Valor mínimo
     * @param {number} max - Valor máximo
     * @returns {string|null}
     */
    range(value, min, max) {
        if (!value) return null;
        const num = parseFloat(value);
        if (num < min || num > max) {
            return `Debe estar entre ${min} y ${max}`;
        }
        return null;
    },

    /**
     * Valida un patrón regex personalizado
     * @param {string} value - Valor a validar
     * @param {RegExp} pattern - Patrón regex
     * @param {string} message - Mensaje de error
     * @returns {string|null}
     */
    pattern(value, pattern, message = 'Formato inválido') {
        if (value && !pattern.test(value)) {
            return message;
        }
        return null;
    },

    /**
     * Valida usuario (para este proyecto)
     * @param {string} value - Nombre de usuario
     * @returns {string|null}
     */
    username(value) {
        let errors = [];
        
        const requiredError = this.required(value, 'Usuario');
        if (requiredError) errors.push(requiredError);
        
        const minError = this.minLength(value, 3, 'Usuario');
        if (minError) errors.push(minError);
        
        // Solo alfanuméricos y guiones bajos
        if (value && !/^[a-zA-Z0-9_-]+$/.test(value)) {
            errors.push('Usuario solo puede contener letras, números, guiones y guiones bajos');
        }
        
        return errors.length > 0 ? errors.join('; ') : null;
    },

    /**
     * Valida contraseña
     * @param {string} value - Contraseña
     * @returns {string|null}
     */
    password(value) {
        let errors = [];
        
        const requiredError = this.required(value, 'Contraseña');
        if (requiredError) errors.push(requiredError);
        
        const minError = this.minLength(value, 3, 'Contraseña');
        if (minError) errors.push(minError);
        
        return errors.length > 0 ? errors.join('; ') : null;
    },

    /**
     * Valida que dos campos coincidan
     * @param {string} value1 - Primer valor
     * @param {string} value2 - Segundo valor
     * @param {string} fieldName - Nombre del campo
     * @returns {string|null}
     */
    match(value1, value2, fieldName = 'Campos') {
        if (value1 !== value2) {
            return `Los ${fieldName} no coinciden`;
        }
        return null;
    },

    /**
     * Valida que sea una URL válida
     * @param {string} value - URL a validar
     * @returns {string|null}
     */
    url(value) {
        try {
            if (value) {
                new URL(value);
            }
            return null;
        } catch {
            return 'URL inválida';
        }
    },

    /**
     * Valida un teléfono (básico)
     * @param {string} value - Número de teléfono
     * @returns {string|null}
     */
    phone(value) {
        if (value && !/^[\d\s\-\+\(\)]{7,}$/.test(value)) {
            return 'Número de teléfono inválido';
        }
        return null;
    },

    /**
     * Validación personalizada con callback
     * @param {string} value - Valor a validar
     * @param {function} validatorFn - Función validadora
     * @returns {string|null}
     */
    custom(value, validatorFn) {
        return validatorFn(value);
    }
};

/**
 * Gestor de Validación de Formularios
 * Facilita la validación de múltiples campos
 */
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
        this.rules = {};
    }

    /**
     * Define reglas de validación para un campo
     * @param {string} fieldName - Nombre del campo
     * @param {Array} validatorArray - Array de validadores
     */
    addRule(fieldName, validatorArray) {
        this.rules[fieldName] = validatorArray;
    }

    /**
     * Valida un campo específico
     * @param {string} fieldName - Nombre del campo
     * @returns {boolean} true si es válido
     */
    validateField(fieldName) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        
        if (!field) {
            console.warn(`Campo no encontrado: ${fieldName}`);
            return false;
        }

        const validators = this.rules[fieldName];
        if (!validators) return true;

        const fieldErrors = [];

        for (let validator of validators) {
            const error = validator(field.value);
            if (error) {
                fieldErrors.push(error);
            }
        }

        if (fieldErrors.length > 0) {
            this.errors[fieldName] = fieldErrors;
            this.showFieldError(fieldName, fieldErrors[0]);
            return false;
        } else {
            delete this.errors[fieldName];
            this.clearFieldError(fieldName);
            return true;
        }
    }

    /**
     * Valida todos los campos del formulario
     * @returns {boolean} true si todos son válidos
     */
    validate() {
        this.errors = {};
        let isValid = true;

        for (let fieldName in this.rules) {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        }

        return isValid;
    }

    /**
     * Muestra error de validación en el campo
     * @param {string} fieldName - Nombre del campo
     * @param {string} message - Mensaje de error
     */
    showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        field.classList.add('is-invalid');
        field.setAttribute('title', message);

        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        } else {
            const div = document.createElement('div');
            div.id = `${fieldName}-error`;
            div.className = 'form-error';
            div.textContent = message;
            field.parentElement.appendChild(div);
        }
    }

    /**
     * Limpia error de validación
     * @param {string} fieldName - Nombre del campo
     */
    clearFieldError(fieldName) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        if (!field) return;

        field.classList.remove('is-invalid');
        field.removeAttribute('title');

        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    /**
     * Obtiene todos los errores
     * @returns {Object} Objeto con errores
     */
    getErrors() {
        return this.errors;
    }

    /**
     * Limpia todos los errores
     */
    clearErrors() {
        for (let fieldName in this.rules) {
            this.clearFieldError(fieldName);
        }
        this.errors = {};
    }
}

/**
 * Ejemplo de uso:
 * 
 * const validator = new FormValidator('myForm');
 * 
 * validator.addRule('username', [
 *     value => Validators.required(value, 'Usuario'),
 *     value => Validators.minLength(value, 3, 'Usuario'),
 *     value => Validators.pattern(value, /^[a-zA-Z0-9_-]+$/, 'Solo letras, números y guiones')
 * ]);
 * 
 * validator.addRule('email', [
 *     value => Validators.required(value, 'Email'),
 *     value => Validators.email(value)
 * ]);
 * 
 * validator.addRule('password', [
 *     value => Validators.required(value, 'Contraseña'),
 *     value => Validators.minLength(value, 6, 'Contraseña')
 * ]);
 * 
 * // En el submit del formulario:
 * document.getElementById('myForm').addEventListener('submit', (e) => {
 *     e.preventDefault();
 *     
 *     if (validator.validate()) {
 *         console.log('Formulario válido');
 *         // Enviar datos
 *     } else {
 *         console.log('Errores encontrados:', validator.getErrors());
 *     }
 * });
 */

// CSS para estilos de validación
const validationStyles = `
<style>
    .is-invalid {
        border-color: #ff0000 !important;
        background-color: rgba(255, 0, 0, 0.05) !important;
    }
    
    .form-error {
        color: #ff0000;
        font-size: 12px;
        margin-top: 4px;
        display: none;
        font-family: var(--font-family-mono, monospace);
    }
    
    .is-valid {
        border-color: #00ff00 !important;
    }
    
    .form-group {
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
    }
    
    .form-group label {
        margin-bottom: 8px;
        font-weight: bold;
        color: #09e6d8;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        padding: 8px;
        border: 1px solid #09e6d8;
        border-radius: 4px;
        background-color: #0a0a0a;
        color: #ffffff;
        font-family: var(--font-family-mono, monospace);
    }
</style>
`;

// Inyectar estilos de validación si no existen
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (!document.querySelector('style[data-validation]')) {
            const style = document.createElement('style');
            style.setAttribute('data-validation', 'true');
            style.textContent = validationStyles.replace(/<[^>]*>/g, '');
            document.head.appendChild(style);
        }
    });
} else {
    if (!document.querySelector('style[data-validation]')) {
        const style = document.createElement('style');
        style.setAttribute('data-validation', 'true');
        style.textContent = validationStyles.replace(/<[^>]*>/g, '');
        document.head.appendChild(style);
    }
}

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Validators, FormValidator };
}
