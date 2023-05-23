### LINK UTILI

- https://getbootstrap.com/docs/5.3/examples/
- https://getbootstrap.com/docs/5.3/getting-started/introduction/

## Bootsrap
Bootstrap è una popolare libreria front-end open-source per lo sviluppo di siti e applicazioni web responsivi e mobili. È stato creato da Twitter e contiene precompilati CSS e JavaScript, così come diversi componenti HTML. Di seguito, alcuni concetti e classi principali di Bootstrap:

- **Sistema di griglia**: Bootstrap ha un sistema di griglia flessibile a 12 colonne che usa classi per specificare la larghezza di un elemento a seconda della dimensione dello schermo (xs, sm, md, lg, xl). Le classi vanno da "col-" a "col-xl-", seguite dal numero di colonne che l'elemento dovrebbe occupare.

- **Componenti**: Bootstrap offre una vasta gamma di componenti riciclabili per l'interfaccia utente, come navbars, dropdowns, progress bars, modals, carousels, ecc. Questi componenti hanno classi specifiche, come ".navbar", ".dropdown", ".progress", ".modal", ".carousel", ecc.

- **Utilities**: Bootstrap fornisce una serie di classi di utilities  per cose come i margini, il padding, il posizionamento, i colori di sfondo, la flessibilità, ecc. Ad esempio, le classi per il padding vanno da "p-0" a "p-5".

- **Responsive breakpoints**: Bootstrap utilizza diversi breakpoint per creare un layout reattivo. Questi breakpoint sono definiti utilizzando media queries e consentono di personalizzare l'aspetto del layout su diverse dimensioni di schermo.


## Sistema di griglia

Il sistema di griglia di Bootstrap è un modo flessibile e potente per costruire layout responsive. È basato su un sistema a 12 colonne, in cui il layout di una pagina può essere suddiviso in massimo 12 colonne. Puoi specificare quanti spazi di griglia vuoi che un elemento occupi, e Bootstrap ridimensionerà automaticamente gli elementi in base alla larghezza dello schermo.

I breakpoints sono utilizzati in Bootstrap per determinare come il layout dovrebbe cambiare in base alla dimensione dello schermo. Questi breakpoints corrispondono a varie dimensioni di schermo, definite in termini di larghezza minima:

- **xs** (extra small): per schermi con larghezza inferiore a 576px. Non è necessario specificare explicitamente questo breakpoint con una classe, ad esempio "col-6" si riferisce a "col-xs-6".
- **sm** (small): per schermi con larghezza pari o superiore a 576px. Ad esempio, "col-sm-6" si applica a questo breakpoint e a quelli più grandi.
- **md** (medium): per schermi con larghezza pari o superiore a 768px. Ad esempio, "col-md-6" si applica a questo breakpoint e a quelli più grandi.
- **lg** (large): per schermi con larghezza pari o superiore a 992px. Ad esempio, "col-lg-6" si applica a questo breakpoint e a quelli più grandi.
- **xl** (extra large): per schermi con larghezza pari o superiore a 1200px. Ad esempio, "col-xl-6" si applica a questo breakpoint e a quelli più grandi.

Qui c'è un esempio di come utilizzare i breakpoints:

```html
<div class="row">
    <div class="col-12 col-sm-6 col-md-4">
        <!-- Questo elemento occupa 12 colonne su xs schermi, 6 colonne su sm schermi, e 4 colonne su md e schermi più grandi -->
    </div>
    <div class="col-12 col-sm-6 col-md-4">
        <!-- Questo elemento occupa 12 colonne su xs schermi, 6 colonne su sm schermi, e 4 colonne su md e schermi più grandi -->
    </div>
    <div class="col-12 col-md-4">
        <!-- Questo elemento occupa 12 colonne su xs e sm schermi, e 4 colonne su md e schermi più grandi -->
    </div>
</div>
```

In questo esempio, su schermi extra small e small, ogni div occupa l'intero spazio orizzontale (12 colonne). Su schermi medium e più grandi, ogni div occupa un terzo dello spazio orizzontale (4 colonne).

Per quanto riguarda "px" e "pt", sono unità di misura usate in CSS:

- **px** sta per "pixel" ed è una unità di lunghezza assoluta. I pixel si riferiscono ai punti di luce sullo schermo e sono usati per misurare cose come la larghezza, l'altezza e il margine degli elementi.
- **pt** sta per "punti" ed è

 un'altra unità di misura usata principalmente per la stampa. In CSS, 1pt equivale a 1/72 di pollice. Per lo sviluppo web, l'unità "px" è molto più comune.
