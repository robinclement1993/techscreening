# Belangrijke informatie

Deze applicatie is gemaakt voor de Tech screening van Team Rockstars IT.
Het is me niet gelukt alle functionaliteit in 4 uur te bouwen.
Hieronder een paar gemaakte keuzes, uiteraard ben ik bereid deze keuzes en overige vragen nader toe te lichten.

De Json-server package wilde geen data tonen na het volgen van hun 'Getting started'.
Omwille van de tijd heb ik besloten een subset van de beschikbare nummers als songs.tsx op te nemen.
Uiteindelijk was er niet genoeg tijd om hier nog eens naar te kijken en het om te zetten naar API calls.

Ik vond dat een MVP minstens het volgende moest kunnen:

- Tonen van alle beschikbare nummers
- Zoeken op artiest
- Één playlist waar je nummers kan toevoegen en verwijderen
- Een playlist in kunnen zien waarbinnen je nummers ook weer kan verwijderen
  Daarnaast heb ik onderstaande 3 extra requirements toegevoegd:
- Vang onbekende urls af in routing
- Gebruik een grid systeem
- Voeg een button animatie toe: De verwijderknop als je nummers in je playlist hebt beweegt bij een hover. De knoppen op de overzichtpagina veranderen van kleur (voor zover je dat een animatie kan noemen :-) )
- Ik heb zo goed mogelijk gelet op de responsiveness van de applicatie, zodat deze ook meeschaalt op kleinere schermen.
  Het grid in de overzichtspagina doet dit heel goed, de playlist is hierin nog niet geoptimaliseerd.
  Als er meer tijd was, had ik hier verder naar gekeken.

Dit is me allemaal gelukt. Dit houdt echter in dat de volgende functionaliteit niet aanwezig is:

- Het bewaren van de state in b.v. een localStorage.
- Detailpagina van artiest met alle beschikbare nummers.
- Toevoegen en verwijderen van playlisten.

Ik vond het belangrijkste dat je een overzicht had van alle nummers, waarbinnen gezocht kan worden op artiest.
Ik ben me ervan bewust dat de overzicht pagina hierdoor iets langer nodig heeft om alles te kunnen renderen. Mijn eerstvolgende stap zou zijn geweest om een overzicht van alle artiesten te tonen en vanuit daar te linken naar detailpagina's met beschikbare nummers om de performance te verbeteren.

Ik vond het belangrijk dat er in ieder geval één playlist is waar je nummers aan kan toevoegen en verwijderen.
Dit is gelukt. Er was niet genoeg tijd om dit uit te breiden naar het kunnen toevoegen en verwijderen van meerdere playlists.

Vanuit mijn huidige werk ben ik bekend geraakt met KendoReact. Dit is echter een betaald pakket waar licenties voor nodig zijn.
Kendo had een hoop issues om deze licensing werkend te krijgen. Dit is volgens mij in een nieuwere package opgelost, dus graag de packages niet updaten.

# De app starten

Download de code en open de root folder in VS Code. Start je de app voor de eerste keer, open dan hier een terminal en run het commando "npm install".
Na enkele momenten zijn alle packages geïnstalleerd.

Start de applicatie vervolgens door het commando "npm start" in de terminal te runnen.

# De app stoppen

Druk in je terminal op Ctrl + C.
Je krijgt de vraag "Terminate batch job (Y/N)?", vul hier 'Y' in en druk op Enter.

# Unit tests runnen

Ik heb een paar unit tests gemaakt. Deze kunnen worden uitgevoerd door middel van het commando "npm test" te runnen in de terminal.
Je terminal verandert in een overzichtspagina van alle unit tests die zijn uitgevoerd. Om dit te verlaten, druk op Ctrl + C.

# Gebruik van de applicatie

Als de applicatie is gestart, beland je op de overzichtpagina waar alle beschikbare nummers worden geladen.
Op deze overzichtspagina is het mogelijk om nummers toe te voegen aan je playlist. Als ze zijn toegevoegd, verandert de knop en wordt het mogelijk om ze meteen weer uit je playlist te kunnen verwijderen.
Ook is het hier mogelijk om te zoeken op artiest.

Linksboven is een knop om de drawer te openen. Vanuit hier kun je naar de playlist gaan.
De playlist is paginated, resizable en kan per kolom gesorteerd worden.
Vanuit hier is het ook mogelijk om liedjes te verwijderen door op de prullenbak te klikken.
