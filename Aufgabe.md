# Aufgabe

ℹ️ Bitte lies zuerst die [README-Datei](./README.md). Dort findest du allgemeine Informationen zum Ablauf.

Hier ist die Aufgabe zur Bearbeitung zu Hause, die du an deinem Kennenlerntag mitbringst und an der wir gemeinsam weiterarbeiten.

## Backend

- Setze ein Projekt mit dem Backend-Framework und der Programmiersprache auf, die du im Vorfeld mit deiner Kontaktperson aus der Qudosoft abgesprochen hast.
- Erstelle einen Endpunkt, der über `localhost:5000/api/products` erreichbar ist.
- Lies die Datei `output.csv` ein.
- Gebe die dort enthaltenen Produkte und deren Eigenschaften als JSON über den Endpunkt aus.

## Frontend

- Setze ein in einem Ordner `/frontend` ein Frontend-Projekt auf. Du kannst wählen zwischen React, Vue.js, Angular oder einem vergleichbaren Framework.
- Frage den API-Endpunkt des Backend an (s. auch Proxy-Info weiter unten) und zeige die Produkte auf einer Seite "Produktübersicht" an. Orientiere dich dabei an der Darstellung im [Mockup](./mockup.png).
- Ab einem Breakpoint von 1000px sollen vier Produkte nebeneinander angezeigt werden, darunter zwei.

Das war's. Weiter geht es dann am Kennenlerntag! Bis dann!

## Proxy API Requests

Wenn Backend und Frontend auf einem anderen Port laufen, muss das Proxying konfiguriert werden.

### Bei React
Um aus der Applikation auf die API zugreifen zu können, muss in `package.json` folgendes hinzugefügt werden:
```
"proxy": "http://localhost:5000"
```
Doku: https://create-react-app.dev/docs/proxying-api-requests-in-development/

### Bei Angular
Um aus der Applikation auf die API zugreifen zu können, muss `src/proxy.conf.json` erstellt werden und folgendes hinzugefügt werden:
```
{
  "/api/products": {
    "target": "http://localhost:5000",
    "secure": false
  }
}
```

In der `angular.json` muss anschließend auf die `proxyConfig.json` verwiesen werden:
```
"architect": {
  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": {
      "browserTarget": "your-application-name:build",
      "proxyConfig": "src/proxy.conf.json"
    },
```

Doku: https://angular.io/guide/build#proxying-to-a-backend-server

### Bei Vue.js
Um aus der Applikation auf die API zugreifen zu können, muss in `vue.config.js` folgendes hinzugefügt werden:
```
devServer: {
    proxy: 'http://localhost:5000'
}
```

Doku: https://cli.vuejs.org/config/#devserver
