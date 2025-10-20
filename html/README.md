# Teknisk dokumentation for Tema 8 gruppeprojekt

## Projektstruktur:
Gruppen har valgt at organisere vores projekt på den måde, at vi har mapper som f.eks. hedder “css”, “js” og “img”, så hvis vi har filer som tilhører den kategori, så bliver de placeret i den kategori.

Boilerplates er oprindeligt blevet oprettet som separate dokumenter på deres egne branches for at undgå konflikter og sikre, at vi ikke roder i hinandens kode. De elementer, der gav mening at samle, er senere blevet slået sammen til ét fælles dokument. Dokumenter, der ikke er blevet integreret, skal naturligvis stadig linkes eller importeres via scripts på hver enkelt side, hvor de anvendes.

## Navngivning:
Gruppen besluttede at navngive filer og mapper med små bogstaver. De blev navngivet efter hvad de indeholdt, så f.eks billeder fik navnet “img”, eller produktlisten, blev kaldt “produktliste.html”. 

Måden vi sikrede os at der ikke blev nogen forvirring mellem HTML-, CSS- og JavaScript-filer, har vi f.eks. typisk navngivet alle “produktliste”/html/css/js - så vidste vi at de tilhører hinanden. 

## Link til scripts:
Gruppen valgte at linke til vores JS scripts i <head> med defer.

## Git branches:
Måden vi navngiver vores branches har været lidt forskelligt, men vi blev enige om hvilken side vi tog enkeltvis og på den måde viste vi hvem der arbejdede på hvilken branch. Nogle har også valgt at tilføje deres navn, og også hvilken version vi var nået til. 


## Arbejdsflow:

Fordeling af arbejde:
Vi har en fælles aftale om, hvem der arbejder på hvilken side og laver hver branches til de respektive sider, vi arbejder på. På denne måde har vi hver vores egen branch og arbejder derfor ikke oveni hinandens kode, samt undgår at overskrive koderne i merge, fordi vi arbejder på hver vores side.

Vi forklarer hvad der er ændret i vores kode i hver commit beskrivelse, for at få et overblik over de nye opdateringer og/eller tilføjelser.

Når vi arbejder sammen fysisk, fortæller vi, når vi merger vores branch med main. Når vi ikke er fysisk til stede, er vi enten på et teams møde eller vores fælles gruppe chat og informerer, når der er blevet merget med main, så der er kode der kan hentes/pulles.

## Kode:
Funktioner i JavaScript:
Vi har både brugt function keywords og arrow functions, alt efter hvad der gav mening for den enkelte. Siden JavaScript er nyt for os alle, har vi brugt hvad der har fungeret for os.

# Funktionalitet
Dette afsnit skal forklare, hvad I konkret har arbejdet med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

Brugeren har adgang til en indkøbskurv for at kunne se de valgte produkter.


Filtrering af produkter:
Vi har lavet filtrering i produktliste cards, så brugeren ud fra deres eget valg, fx “mascara” card, kan tilgå den valgte kategori fra Beauty API’en.


Dynamisk visning i HTML:

Gennem cards, kan brugerne sortere produkter i fragrance, make-up og skincare. Der er pris-sortering (lav til høj) til at gøre det lettere at shoppe på budget.  
På produktkort kan man se prisen på et enkelt produkt, om de er disponible eller solgt-ud og om der er tilbud. Tilbud farvene er røde for at gøre dem mere synlige. 

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints
Dette afsnit skal liste de endpoints fra API'et i har benyttet:
- https://dummyjson.com/products/category/beauty
- https://dummyjson.com/products/category/skin-care 
- https://dummyjson.com/products/category/fragrances 

# Dokumentation af Funktion 
Vi vælger en del af vores burgermenu som eksempel på funktion i vores JS kode. Denne kode går igen på alle sider og er essentiel for hjemmesiden. 

Det som funktionen gør, er at når man klikker på ikonet med de tre streger, aktiverer det klassen, hamburger, som får burgermenuen til at vise sig. 

Det input som forventes er at den aktivere “active” klassen, når den klasse kommer på, ændres udseendet og en animation spilles i CSS koden. Funktionen manipulere DOM’en.

- Eksempel på brug: 
//funktionens kode:
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//hvordan funktionen kaldes:
Den bliver kaldt når man klikker på classen .hamburger
# Teknisk dokumentation for Tema 8 gruppeprojekt

## Projektstruktur:
Gruppen har valgt at organisere vores projekt på den måde, at vi har mapper som f.eks. hedder “css”, “js” og “img”, så hvis vi har filer som tilhører den kategori, så bliver de placeret i den kategori.

Boilerplates er oprindeligt blevet oprettet som separate dokumenter på deres egne branches for at undgå konflikter og sikre, at vi ikke roder i hinandens kode. De elementer, der gav mening at samle, er senere blevet slået sammen til ét fælles dokument. Dokumenter, der ikke er blevet integreret, skal naturligvis stadig linkes eller importeres via scripts på hver enkelt side, hvor de anvendes.

## Navngivning:
Gruppen besluttede at navngive filer og mapper med små bogstaver. De blev navngivet efter hvad de indeholdt, så f.eks billeder fik navnet “img”, eller produktlisten, blev kaldt “produktliste.html”. 

Måden vi sikrede os at der ikke blev nogen forvirring mellem HTML-, CSS- og JavaScript-filer, har vi f.eks. typisk navngivet alle “produktliste”/html/css/js - så vidste vi at de tilhører hinanden. 

## Link til scripts:
Gruppen valgte at linke til vores JS scripts i <head> med defer.

## Git branches:
Måden vi navngiver vores branches har været lidt forskelligt, men vi blev enige om hvilken side vi tog enkeltvis og på den måde viste vi hvem der arbejdede på hvilken branch. Nogle har også valgt at tilføje deres navn, og også hvilken version vi var nået til. 


## Arbejdsflow:

Fordeling af arbejde:
Vi har en fælles aftale om, hvem der arbejder på hvilken side og laver hver branches til de respektive sider, vi arbejder på. På denne måde har vi hver vores egen branch og arbejder derfor ikke oveni hinandens kode, samt undgår at overskrive koderne i merge, fordi vi arbejder på hver vores side.

Vi forklarer hvad der er ændret i vores kode i hver commit beskrivelse, for at få et overblik over de nye opdateringer og/eller tilføjelser.

Når vi arbejder sammen fysisk, fortæller vi, når vi merger vores branch med main. Når vi ikke er fysisk til stede, er vi enten på et teams møde eller vores fælles gruppe chat og informerer, når der er blevet merget med main, så der er kode der kan hentes/pulles.

## Kode:
Funktioner i JavaScript:
Vi har både brugt function keywords og arrow functions, alt efter hvad der gav mening for den enkelte. Siden JavaScript er nyt for os alle, har vi brugt hvad der har fungeret for os.

# Funktionalitet
Dette afsnit skal forklare, hvad I konkret har arbejdet med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

Brugeren har adgang til en indkøbskurv for at kunne se de valgte produkter.


Filtrering af produkter:
Vi har lavet filtrering i produktliste cards, så brugeren ud fra deres eget valg, fx “mascara” card, kan tilgå den valgte kategori fra Beauty API’en.


Dynamisk visning i HTML:

Gennem cards, kan brugerne sortere produkter i fragrance, make-up og skincare. Der er pris-sortering (lav til høj) til at gøre det lettere at shoppe på budget.  
På produktkort kan man se prisen på et enkelt produkt, om de er disponible eller solgt-ud og om der er tilbud. Tilbud farvene er røde for at gøre dem mere synlige. 

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints
Dette afsnit skal liste de endpoints fra API'et i har benyttet:
- https://dummyjson.com/products/category/beauty
- https://dummyjson.com/products/category/skin-care 
- https://dummyjson.com/products/category/fragrances 

# Dokumentation af Funktion 
Vi vælger en del af vores burgermenu som eksempel på funktion i vores JS kode. Denne kode går igen på alle sider og er essentiel for hjemmesiden. 

Det som funktionen gør, er at når man klikker på ikonet med de tre streger, aktiverer det klassen, hamburger, som får burgermenuen til at vise sig. 

Det input som forventes er at den aktivere “active” klassen, når den klasse kommer på, ændres udseendet og en animation spilles i CSS koden. Funktionen manipulere DOM’en.

- Eksempel på brug: 
//funktionens kode:
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


//hvordan funktionen kaldes:
Den bliver kaldt når man klikker på classen .hamburger
