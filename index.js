// 1.- Scripting: Frecuencias de Palabras 

// Usando cualquier lenguaje de programación, escriba un programa que, dado un texto, cuente: 

// 1)	El numero de palabras 
// 2)	La frecuencia de cada palabra 
// 3)	Las 5 palabras mas frecuentes. 

const main = text => {
    if (!text || text.length === 0) return;
    const words = getWords(text);
    writeQuantity(words);
    const frequencies = getFrequencies(words);
    writeFrequency(frequencies);
    writeTopFive(frequencies);
    console.log(`----------------------------------`);
} 

const getWords = text => text.toLowerCase().replace(/[^0-9a-zA-Z]/g, ' ').trim().split(' ');

const writeQuantity = words => {
    console.log(`Palabras: ${words.length}`);
}

const writeFrequency = frequencies => {
    let result = `Frecuencia: ${frequencies.length > 0 ? `` : `No hay palabras 2 o mas repeticiones`}`; 
    frequencies.forEach((frequency, index) => {
        result += `'${frequency.word}' (${frequency.quantity})${++index === frequencies.length ? `` : `, `}`;
    });
    console.log(result);
}

const writeTopFive = frequencies => {
    let result = `top-5: ${frequencies.length > 0 ? `` : `No hay palabras 2 o mas repeticiones`}`;
    const topFiveFrequencies = frequencies.slice(0, 5);
    topFiveFrequencies.forEach((frequency, index) => {
        result += `${frequency.word}${++index === topFiveFrequencies.length ? `` : `, `}`;
    });
    console.log(result);
}

const getFrequencies = words => {
    const frequencies = [];
    const uniqueWords = Array.from(new Set(words));
    for (const uniqueWord of uniqueWords) {
        const frequency = {word: uniqueWord, quantity: words.filter(word => word === uniqueWord).length}
        frequencies.push(frequency);
    }
    const filteredFrequencies = frequencies.filter(frequency => frequency.quantity > 1);
    filteredFrequencies.sort((a, b) => b.quantity - a.quantity);
    return filteredFrequencies;
}

// (Las palabras son consideradas case-insensitive. Descartar las palabras que solo aparezcan una vez) 
// (puede asumir que el testo esta definido como parámetro de un string)

// Ejemplo: 
// Con el input: 'This is a line\nAnd this is other' el programa deberia producer la siguiente salida: 

// 1)	Palabras= 8
// 2)	Frecuencia: 'this' (2), 'is' (2)
// 3)	top-5 = this, is
//----------------------------------------------------------------------------------------------------
// 2. Como se extrae el valor del atributo 'autocomplete' del siguiente elemento: 

// <input type="search" name="search" placeholder="Search Wikipedia" title="Search Wikipedia [ctrl-option-f]" accesskey="f" id="search_input" autocomplete="off">
// const string = await driver.findElement(By.Id('search_input')).getAttribute('autocomplete');
//-----------------------------------------------------------------------------------------------------
// 3. Que hace el siguiente código:

// account = WebDriverWait(self.driver, 10).until(expected_condition.visibility_of_element_located((By.LINK_TEXT,  "ACCOUNT"))
// account.click()
// El driver esperara hasta 10 segundos para encontrar un elemento el cual contenga un link con el texto "ACCOUNT"
// Si lo encuentra hara click sobre el mismo.
//------------------------------------------------------------------------------------------------------

// 4.- Que hace el siguiente código: 

// driver.implicitly_wait(20)
//------------------------------------------------------------------------------------------------------
// 5.- Que hace el siguiente código: 

// select_amount = Select(driver.find_element_by_name(‘amount’))
// select_amount.select_by_value(‘3’)
// De una lista, se seleciona la option que contenga el value 3.
//------------------------------------------------------------------------------------------------------

// 6.- Creacion de casos de pruebas 
// Para el programa del ejercicio 1, identifique los casos que usaría para asegurar que el código produce el resultado esperado, clasifíquelos por prioridad. También, describa que casos usarías para probar que el código sea robusto. 
//

console.log(`Caso 1 - Texto de Ejemplo`);
console.log(`ENTRADA: This is a line\\nAnd this is other`);
console.log(`RESULTADO ESPERADO: Palabras: 8, Frecuencia: 'this' (2), 'is' (2), top-5 = this, is`);
main(`This is a line\nAnd this is other`);

console.log(`Caso 2 - Texto Vacio`);
console.log(`ENTRADA: `);
console.log(`RESULTADO ESPERADO: no genera salida`);
main(``);


console.log(`Caso 3 - Nulo`);
console.log(`ENTRADA: null`)
console.log(`RESULTADO ESPERADO: no genera salida`);
main(null);


console.log(`Caso 4 - Mas de 6 Palabras con 2 o mas repeticiones`);
console.log(`ENTRADA: hola hola como como estas estas espero espero que que bien bien`);
console.log(`RESULTADO ESPERADO: Palabras: 12, Frecuencia: 'hola' (2), 'como' (2), 'estas' (2), 'espero' (2), 'que' (2), 'bien' (2), top-5: hola, como, estas, espero, que `);
main(`hola hola como como estas estas espero espero que que bien bien`);
//
console.log(`Caso 5 - Palabras sin ninguna repeticion`);
console.log(`ENTRADA: hola como estas espero que bien`);
console.log(`RESULTADO ESPERADO: Palabras: 6, Frecuencia: No hay palabras 2 o mas repeticiones, top-5: No hay palabras 2 o mas repeticiones`);
main(`hola como estas espero que bien`);
