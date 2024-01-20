<p align="center">
    <img src="https://github.com/godouxx/R_Trade/blob/demo/public/images/Rtradelogo.png" width="100">
</p>

# RTrade

## Introduction

<p align="justify">
    De nos jours, on entend de plus en plus parler de précarité étudiante. En effet, beaucoup d'étudiants ont du mal a s'en sortir selon ce que les bourses ou leur parents leur versent. Ces étudiants sont donc contraints la plupart du temps à se priver. Nous avons décidé de nous joindre à la cause en proposant RTrade, une application d'échange de services entre étudiants qui s'appuie sur des valeurs d'entraide et de partage. Elle proposerait des services de manucure, coiffure, tatouages, cuisine, bricolage...  Cette application serait dédié aux étudiants de Rennes et de sa périphérie, notre cible est donc locale dans un premier temps.
  
</p>

  **En résumé notre application souhaite mettre en lien des étudiants en s'appuyant sur des valeurs d'entraide et de partage.**
  
## Procédure d'installation
<p align="justify">
Ayant développé l'application RTrade sur Linux et Windows, nous allons vous expliquer comment installer l'application sur Linux. Nous allons expliquer les commandes pour procéder à l'installation de notre application
</p>

Pour installer l'application RTrade, il faut suivre les étapes suivantes :

**1. Installer les dépendances**

Pour l'utilisation de notre application, il faut utiliser une version de node supérieure ou égale à la version 14.0.0. car nous utilisons syntaxes qui ne sont pas supportées par les versions antérieures. 
Pour cela vous pouvez installer l'outil de gestion nvm (Node Version Manager) qui permet de gérer les versions de node. Sous Linux il est possible d'exécuter la commande suivante :
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
ou bien 
```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Puis, il faut exécuter la commande suivante pour installer la dernière version stable de node :
```bash
nvm install stable

```
Si vous avez déjà installé node, vous pouvez exécuter la commande suivante pour utiliser la dernière version stable de node :
```bash
nvm use stable
```
N'hésitez pas à vérifier la version de node que vous utilisez en exécutant la commande suivante :
```bash
node -v
```

Pour installer les dépendances, il faut exécuter la commande suivante à la racine du projet:
```bash
npm install
```
ou bien :
```bash
npm i
```
**2. Ajouter le certificat sur votre navigateur pour pouvoir utiliser le HTTPS**
<p align="justify">
Il est crucial d'intégrer la sécurisation par HTTPS, impliquant l'utilisation d'un certificat SSL/TLS et d'une clé privée, dans un projet de site internet pour plusieurs raisons primordiales. Tout d'abord, HTTPS garantit la confidentialité des données échangées entre le serveur et les utilisateurs en chiffrant les communications. Sans cette protection, les informations telles que les mots de passe, les informations personnelles et les détails de paiement seraient vulnérables aux interceptions malveillantes. De plus, l'utilisation de HTTPS renforce l'intégrité des données en assurant qu'elles ne sont ni altérées ni corrompues pendant leur transfert. La mise en place d'un certificat SSL/TLS avec une clé privée authentifie le site web, établissant ainsi la confiance des utilisateurs en vérifiant l'identité du serveur. Enfin, l'utilisation de HTTPS améliore la visibilité du site web dans les moteurs de recherche, car les sites web sécurisés sont mieux classés que les sites web non sécurisés.
Cette approche répond aux normes strictes du Règlement général sur la protection des données (RGPD) de l'Union européenne, qui met l'accent sur la protection des données personnelles et la confidentialité. En intégrant HTTPS, le site démontre son engagement envers la sécurité des données, conforme aux principes du RGPD visant à assurer un traitement transparent et sécurisé des informations personnelles. Ainsi, l'implémentation de HTTPS avec une clé privée offre non seulement une sécurité robuste et renforce la confiance des utilisateurs, mais elle s'aligne également sur les normes légales essentielles de protection des données qui sont cruciales dans l'environnement réglementaire actuel.
Le certificat est présent dans le dossier ssl du projet. Il faut donc le copier dans le dossier ssl de votre navigateur.
Pour faire fonctionner notre site en local on utilise une clé privée et un certificat auto-signé. Il faudra donc avoir la clé privée et le certificat sur votre navigateur pour pouvoir utiliser le HTTPS. La clé privée vous a été transmise par mail. Le certificat est présent dans le dossier ssl du projet. Il faut donc le copier dans le dossier ssl de votre navigateur (il doit porter le nom local.key).
</p>
<p align="justify">
Pour ajouter le certificat sur votre navigateur, il faudra aller sur votre navigateur et ajouter le certificat dans les paramètres de sécurité.
</p>
<p align="justify">
Pour chrome/chromium, il faut aller dans <i>"chrome://settings"</i> et aller dans <i>"Privacy and security"</i> et aller dans <i>"Security"</i> et aller dans <i>"Manage certificates"</i> et aller dans <i>"Authorities"</i> et cliquer sur <i>"Import"</i> et sélectionner le certificat <i>"certificat.pem"</i> présent dans le dossier ssl du projet. Ensuite cliquer sur <i>"Open"</i> et cocher les cases <i>"Trust this certificate for identifying websites"</i>, <i>"Trust this certificate for identifying email users"</i> et <i>"Trust this certificate for identifying software makers"</i> puis cliquer sur <i>"OK"</i> et redémarrer le navigateur.
</p>

<p align="justify">
Pour chrome, il faut aller dans <i>"chrome://settings"</i> et aller dans <i>"Confidentialité et sécurité"</i> et aller dans <i>"Securité"</i> et aller dans <i>"Gérer les certificats"</i> et aller dans <i>"Autorités de certification racines de confiance"</i> et cliquer sur <i>"Importer..."</i>. Lors du choix du fichier, dans le fichier ssl de bien accepter l'ensemble des types de fichiers. Ensuite, sélectionner le certificat <i>"monCA.pem"</i>. Ensuite cliquer sur <i>"Ouvrir"</i>. Ensuite, vous arrivez sur la page <i>"magasin de certicats"</i> et sélectionner <i>"placer tout les certificats dans le magasin suivant"</i> et verifier que ce soit bien dans <i>"autorités de certification racine de confiance"</i>  puis cliquer sur <i>"OK"</i> et redémarrer le navigateur.
</p>

Il faut redémarrer le navigateur pour que les changements soient pris en compte.

**3. Lancer l'application**

***Linux :***

Pour lancer l'application, il faut exécuter la commande suivante à la racine du projet :
```bash
sudo npm start
```
Cela va lancer l'application sur l'environnement de développement. Pour accéder à l'application, il faut aller sur l'adresse suivante : https://localhost
Il utilise le port 443 et 80. Il y a une redirection automatique du port 80 (http) vers le port 443. Il faut donc que le port 80 soit libre pour pouvoir lancer l'application.
Il est également possible de lancer l'application sur un autre port en exécutant la commande suivante :
```bash
sudo npm run start:prod
```
Cela va lancer l'application sur l'environnement de production. Cependant les deux environnements sont pour l'instant identiques.

***Windows :***
Pour lancer l'application, il faut exécuter la commande suivante à la racine du projet :
```bash
npm run startWin:dev
```
Cela va lancer l'application sur l'environnement de développement. Pour accéder à l'application, il faut aller sur l'adresse suivante : https://localhost
Il utilise le port 443 et 80. Il y a une redirection automatique du port 80 (http) vers le port 443. Il faut donc que le port 80 soit libre pour pouvoir lancer l'application.
Il est également possible de lancer l'application sur un autre port en exécutant la commande suivante :
```bash
npm run startWin:prod
```
Cela va lancer l'application sur l'environnement de production. Cependant les deux environnements sont pour l'instant identiques.

**4. Manuel d'utilisation**
Le manuel d'utilisation se situe dans le dossier Rapport sous le nom USER_MANUAL.md. Ce manuel d'utilisation décrit le fonctionnement de l'application et les différentes fonctionnalités de l'application ainsi que le parcours utilisateur.

**5. Planification du projet**
La planification du projet se situe dans le dossier Rapport sous le nom ROADMAP.md. Ce document décrit la planification du projet et les différentes étapes de développement du projet à suivre pour le prochain semestre.
