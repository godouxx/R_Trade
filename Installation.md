# Installation de l'application RTrade

Ayant développé l'application RTrade sur Linux, nous allons vous expliquer comment installer l'application sur Linux. Il y a des problèmes de compatibilité avec Windows pour le lancement de l'application suite aux variables d'environnement qui ne sont pas appelées de la même manière sur Windows et Linux.t

Pour installer l'application RTrade, il faut suivre les étapes suivantes :

**1. Installer les dépendances**

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

**2. Ajouter le certificat sur votre navigateur pour pouvoir utiliser le HTTPS**
Pour ajouter le certificat sur votre navigateur, il faudra aller sur votre navigateur et ajouter le certificat dans les paramètres de sécurité.
Pour Chromium, il faut aller dans *"chrome://settings"* et aller dans *"Privacy and security"* et aller dans *"Security"* et aller dans *"Manage certificates"* et aller dans *"Autorithies"* et cliquer sur *"Import"* et sélectionner le certificat *"certificat.pem"* présent dans le dossier ssl du projet. Ensuite cliquer sur *"Open"* et cocher les cases *"Trust this certificate for identifying websites"*, *"Trust this certificate for identifying email users"* et *"Trust this certificate for identifying software makers"* puis cliquer sur *"OK"* et redémarrer le navigateur.

Il faut redémarrer le navigateur pour que les changements soient pris en compte.

Pour chrome, il faut aller dans *"chrome://settings"* et aller dans *"Confidentialité et sécurité"* et aller dans *"Securité"* et aller dans *"Gérer les certificats"* et aller dans *"Autorités de certification racines de confiance"* et cliquer sur *"Importer..."*. Lors du choix du fichier, dans le fichier ssl de bien accepter l'ensemble des types de fichiers. Ensuite, sélectionner le certificat *"monCA.pem"*. Ensuite cliquer sur *"Ouvrir"*. Ensuite, vous arrivez sur la page *"magasin de certificats"* et sélectionner *"placer tous les certificats dans le magasin suivant"* et vérifier que ce soit bien dans *"autorités de certification racine de confiance"*  puis cliquer sur *"OK"* et redémarrer le navigateur.

Il faut redémarrer le navigateur pour que les changements soient pris en compte.

**3. Lancer l'application**
Pour lancer l'application, il faut exécuter la commande suivante à la racine du projet :
```bash
sudo npm start
```
Cela va lancer l'application sur
