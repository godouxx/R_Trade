<p align="center">
    <img src="https://github.com/godouxx/R_Trade/blob/demo/public/images/Rtradelogo.png" width="100">
</p>

# RTrade

## Introduction

<p align="justify">
  Notre application RTrade mettra en ligne des services variés comme de la coiffure, de la manucure ou des cours particuliers qui pourront être proposés par les étudiants qui le souhaitent. Les personnes intéressées par ces annonces pourront donc accéder à ces services en utilisant des jetons propres à l'application, évitant ainsi les échanges d'argent. Les étudiants proposant les services seront donc récompensés avec ces jetons qu'ils pourront à leur tour utiliser afin de profiter de services d'autres étudiants. Des notes seront attribuées aux étudiants prestataires et clients des services, permettant la mise en place d'un système de référencement. Pour l'instant, nous comptons proposer notre application dans la ville de Rennes uniquement afin d'en évaluer ses forces et ses défauts.
</p>

  **En résumé notre application souhaite mettre en lien des étudiants en s'appuyant sur des valeurs d'entraide et de partage.**
  
## Procédure d'installation

Ayant développé l'application RTrade sur Linux, nous allons vous expliquer comment installer l'application sur Linux. Il y a des problèmes de compatibilité avec Windows pour le lancement de l'application suite aux variables d'environnement qui ne sont pas appelées de la même manière sur Windows et Linux.t

Pour installer l'application RTrade, il faut suivre les étapes suivantes :

1. Installer les dépendances

Pour l'utilisation de notre application, il faut utiliser une version de node supérieure ou égale à la version 14.0.0. car nous utilisons syntaxes qui ne sont pas supportées par les versions antérieures. 
Pour cela vous pouvez installer l'outil de gestion nvm (Node Version Manager) qui permet de gérer les versions de node. Pour cela, il faut exécuter la commande suivante :
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

