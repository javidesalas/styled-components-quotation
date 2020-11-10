export function calcularDiferenciaYear(year) {
    
    return new Date().getFullYear() - parseInt(year)
}

export function calcularDiferenciaMarca(marca) {
    let incremento
    switch (marca) {
        case "europeo":
            incremento = 1.3;
            break;
        case "americano":
            incremento = 1.15;
            break;
        case "asiatico":
            incremento = 1.05;
            break;
        default:
            break;
    }
    return incremento;
}

export function calcularDiferenciaPlan(plan) {
    const incremento = plan === "basico" ? 1.2 : 1.5
    return incremento
}

export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}