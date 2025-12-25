/**
 * Configuración global de la aplicación
 * Centraliza todas las constantes y configuraciones
 */

const CONFIG = {
    // Credenciales de acceso (para demostración)
    AUTH: {
        username: "none",
        password: "none"
    },

    // Mensajes del sistema
    MESSAGES: {
        ACCESS_DENIED: "ACCESS DENIED!",
        ACCESS_GRANTED: "ACCESS GRANTED!",
        INVALID_CREDENTIALS: "Credenciales inválidas",
        LOADING: "Cargando...",
        ERROR: "Error en la operación"
    },

    // Tiempos de espera en milisegundos
    TIMEOUTS: {
        LOADING: 1500,
        REDIRECT_DENIED: 3000,
        ACCESS_GRANTED_REVEAL: 3000,
        SECURE_SECTION_SHOW: 3000
    },

    // Puertos y conexiones
    NETWORK: {
        DEFAULT_PORT: 8080,
        DEFAULT_IP: "192.168.1.1"
    },

    // Configuración de animaciones
    ANIMATIONS: {
        FADE_IN_DURATION: 1.5,
        FADE_OUT_DURATION: 0.5
    },

    // Rango de edades para generador
    AGE_RANGE: {
        MIN: 18,
        MAX: 65
    },

    // Nombres disponibles para generador
    NAMES: {
        nombres: ["Pepe", "Carlos", "Jesús", "Lola", "Rosa", "Maria", "Aaliyah", "Abbey", "Abbie", "Abigail", "Ada", "Adalyn",
            "Adelaide", "Adele", "Adeline", "Adrianna", "Agatha", "Agnes", "Aisha", "Alease", "Alene", "Alesha", "Alex",
            "Alexandra", "Alexia", "Alice", "Aline", "Alisha", "Alison", "Amanda", "Amber", "Amy", "Andi", "Angelina",
            "Angie", "Anna", "Annabelle", "Anne", "April", "Arlene", "Ashley", "Audrey", "Barbra", "Beatrice", "Bernadette",
            "Bertha", "Beth", "Betty", "Beverly", "Blanche", "Brenda", "Bridget", "Britney", "Brooklynn", "Candice",
            "Carlie", "Caroline", "Casey", "Catherine", "Chantal", "Charlotte", "Chelsea", "Cher", "Chloe", "Christal",
            "Aaron", "Abel", "Abraham", "Ace", "Adam", "Alan", "Albert", "Alexander", "Alfred", "Allen", "Alton",
            "Ambrose", "Anderson", "Andrew", "Andy", "Angus", "Anthony"
        ],
        apellidos1: ["Martin", "Lopez", "Salas", "Mateo", "Abas", "De Diego", "Abrahams", "Abramson", "Adamson", "Ainsworth",
            "Albertson", "Aniston", "Battle", "Beckett", "Beckham", "Black", "Bramson", "Brown", "Bullock", "Burrell",
            "Bush", "Clinton", "Cocks", "Cook", "Cox", "Cranston", "Derricks", "Disney"
        ],
        apellidos2: ["Quesada", "Alcala", "Marín", "Suarez", "Cobos", "Rios", "Kendall", "Lennon", "Mathews",
            "Mayer", "Michaelson", "Miller", "Morrison", "O'Sullivan", "Pemberton", "Perry", "Sheeran", "Simpson",
            "Smith", "Stone", "Taylor", "Walsh", "Washington", "Williams", "Willis", "Wilson"
        ]
    },

    // Géneros disponibles
    GENDERS: ["Male", "Female"],

    // URLs de recursos externos
    EXTERNAL_URLS: {
        IPIFY_API: "https://api.ipify.org/?format=jsonp&callback=get_ip",
        FAKE_PERSON_GENERATOR: "https://thispersondoesnotexist.com"
    },

    // Elementos del DOM (IDs)
    DOM_ELEMENTS: {
        LOADING: "lo",
        ACCESS_FORM: "ro",
        ACCESS_DENIED: "negado",
        ACCESS_GRANTED: "int",
        SECURE_SECTION: "sec",
        CAMERA_SECTION: "show",
        DATA_OVERFLOW: "t",
        MODAL: "modal",
        USER_INPUT: "user",
        PASSWORD_INPUT: "pas",
        IP_DISPLAY: ["ipId", "ipId2", "ipId3"],
        RANDOM_NUM: "randomNum",
        AGE_DISPLAY: "edadGenerada",
        SSN_DISPLAY: "ssnGenerado",
        NAME_DISPLAY: "nombreGenerado",
        CHAT: "chat"
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
