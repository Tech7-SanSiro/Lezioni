Le variabili CSS, note anche come proprietà personalizzate, sono un potente strumento che permette di memorizzare e riutilizzare valori specifici in tutto il foglio di stile CSS. Essi consentono di gestire in modo più efficace il codice CSS, rendendolo più semplice da mantenere e aggiornare.

## Introduzione alle variabili CSS:
Le variabili CSS sono dichiarate all'interno di un selettore, generalmente il selettore ":root" che rappresenta l'elemento radice del documento (solitamente l'elemento HTML). Le variabili iniziano con due trattini (--) e vengono assegnate un valore. Ecco un esempio di dichiarazione di alcune variabili CSS:

```
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size: 16px;
}
```
Utilizzo delle variabili CSS:
Per utilizzare le variabili CSS nel foglio di stile, è possibile far riferimento ad esse tramite la funzione "var()". Ad esempio:

```
body {
  font-size: var(--font-size);
  color: var(--primary-color);
  background-color: var(--secondary-color);
}
```

## Esempio pratico:
Immaginiamo di avere un sito web con un tema principale e uno secondario, che possono essere cambiati dall'utente. Senza variabili CSS, sarebbe necessario aggiornare manualmente tutti i valori nel foglio di stile ogni volta che si desidera modificare i colori del tema. Tuttavia, utilizzando le variabili CSS, è possibile gestire facilmente i colori del tema centralizzando la definizione dei valori.
```
/* Variabili */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

/* Stili di base */
body {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

button {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}

```

Se l'utente desidera cambiare il tema del sito, basta aggiornare i valori delle variabili e tutto il resto del foglio di stile si adatterà di conseguenza.

## Vantaggi dell'utilizzo delle variabili CSS:

Centralizzazione dei valori comuni: Le variabili CSS consentono di definire valori che vengono utilizzati più volte in un unico punto, rendendo il codice più facile da gestire e aggiornare.
Semplificazione della manutenzione: Modificare un valore di una variabile CSS in un unico posto permette di propagare la modifica a tutte le occorrenze della variabile nel foglio di stile, risparmiando tempo e riducendo la possibilità di errori.
Interoperabilità con JavaScript: Le variabili CSS possono essere facilmente lette e aggiornate tramite JavaScript, offrendo la possibilità di creare interazioni dinamiche tra il codice CSS e il codice JavaScript



# Concetti JS

### querySelectorAll():
querySelectorAll() è un metodo del Document Object Model (DOM) che permette di selezionare tutti gli elementi di una pagina HTML che corrispondono a uno specifico selettore CSS. Il metodo ritorna una NodeList, una raccolta di nodi che può essere iterata per accedere a ciascun elemento selezionato. Ecco un esempio di utilizzo di querySelectorAll():
```
const buttons = document.querySelectorAll('button');
```
In questo esempio, querySelectorAll() seleziona tutti gli elementi button presenti nella pagina HTML e li memorizza nella variabile buttons.



### forEach():
forEach() è un metodo degli array e di altre strutture simili agli array (come NodeList) in JavaScript, che permette di eseguire una funzione per ogni elemento nella raccolta. Il metodo accetta come argomento una funzione callback, che viene chiamata per ciascun elemento dell'array con tre parametri: l'elemento corrente, l'indice dell'elemento e l'array stesso.
Ecco un esempio di utilizzo di forEach():

```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Index ${index}: ${number}`);
});
```
In questo esempio, la funzione callback viene chiamata per ogni elemento nell'array numbers, stampando il suo indice e il valore corrispondente.

È importante notare che forEach() non modifica l'array originale e non restituisce un nuovo array, ma viene utilizzato esclusivamente per eseguire azioni o operazioni su ogni elemento della raccolta.

### this.dataset:
dataset è una proprietà degli elementi del DOM che fornisce l'accesso a tutti gli attributi "data-" personalizzati presenti nell'elemento. Gli attributi "data-" sono utilizzati per memorizzare informazioni personalizzate direttamente all'interno di un elemento HTML. La proprietà dataset restituisce un oggetto DOMStringMap contenente i nomi degli attributi "data-*" come chiavi e i loro valori corrispondenti.
Ad esempio, se si ha un elemento HTML come questo:
```
<div id="example" data-color="blue" data-size="large"></div>
```
Si può accedere agli attributi "data-*" utilizzando dataset:

```
const element = document.querySelector('#example');
console.log(element.dataset.color); // Output: "blue"
console.log(element.dataset.size); // Output: "large"
```
Nel contesto di una funzione, la parola chiave this fa riferimento all'oggetto su cui è stata chiamata la funzione. Pertanto, this.dataset si riferisce agli attributi "data-*" dell'elemento su cui la funzione è stata chiamata.