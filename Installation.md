# Installation de l'application RTrade

Pour installer l'application RTrade, il faut suivre les étapes suivantes :

1. Installer les dépendances
 Pour installer les dépendances, il faut exécuter la commande suivante à la racine du projet:
```bash
npm install
```
ou bien :
```bash
npm i
```
2. Ajouter le certificat sur votre navigateur pour pouvoir utiliser le HTTPS
Pour ajouter le certificat sur votre navigateur, il faudra aller sur votre navigateur et ajouter le certificat dans les paramètres de sécurité.
Pour chrome/chromium, il faut aller dans "chrome://settings" et aller dans "Privacy and security" et aller dans "Security" et aller dans "Manage certificates" et aller dans "Authorities" et cliquer sur "Import" et sélectionner le certificat "certificat.pem" et cliquer sur "Open" et cocher les cases "Trust this certificate for identifying websites", "Trust this certificate for identifying email users" et "Trust this certificate for identifying software makers" puis cliquer sur "OK" et redémarrer le navigateur.

A vérifier
Ou bien vous pouvez autoriser les certificats non valides pour les ressources chargées à partir de localhost. Pour chrome/chromium, il faut aller dans "chrome://flags" et activer l'option "Allow invalid certificates for resources loaded from localhost" et redémarrer le navigateur. 

Il est préférable d'utiliser la première méthode.
Il faut redémarrer le navigateur pour que les changements soient pris en compte.