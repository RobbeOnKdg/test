# Lost in tra(i)nslation – Portfolio van Jules Lauwaert

Dit project is een **portfolio website** van Jules Lauwaert, studente Grafische en Digitale media aan de hogeschool AP. Het doel van dit project is om het proces rond het ontwerpen van treinborden te documenteren, week per week.

## Inhoud van het project

De website is opgebouwd uit een **indexpagina** en afzonderlijke pagina’s voor iedere week.

## Mappen structuur

```

project-root/
│
├─ index.html # Startpagina / overzicht van alle weken
├─ weeks/
│ ├─ week1.html
│ ├─ week2.html
│ └─ ... # Pagina's van week 1 t/m 12
├─ dist
│ └─ output.css
├─ src
│ └─ input.css
├─ tailwind.config.js # styling die niet kan met de standaard Utility-klassen
├─ postcss.config.js # config voor postcss plugins zoals tailwind, zodat de css wordt verwerkt voor het naar de browser gaat
├─ assets/
│ ├─ css/
│ │ ├─ styles.css # Algemene stijlen voor het hele project
│ │ └─ index.css # Specifieke stijlen voor indexpagina
│ └─ images/ # Eventuele afbeeldingen van het project
└─ README.md # Dit bestand

```

## Technologieën

- **HTML5** – Structuur van de website  
- **CSS3** – Styling en layout, inclusief grid en flexbox  
- **Google Fonts (Oswald)** – Voor typografie  
- **Responsive design** – Grid en flexbox zorgen dat de site goed werkt op mobiel en desktop
- **TailWind** - Utility-first Framework voor hergebruik van css klassen voor snellere styling.  

---

## Functionaliteiten

- **Indexpagina (`index.html`)**  
  - Overzicht van alle weken  
  - Navigatie naar individuele weekpagina’s  

- **Weekpagina’s (`weeks/weekX.html`)**  
  - Bevatten per week een overzicht van wat geleerd is  
  - Header met navigatie terug naar index  
  - Afbeeldingen en content die het proces documenteren  

- **Toegankelijkheid**  
  - Visueel verborgen koppen (`sr-only`) voor screenreaders  

---