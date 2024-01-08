---
title: Authentification
tags:
  - Authentification
  - Commandes
sidebar_position: 2
---

:::tip Nouveau !

Depuis la v2, **seul les joueurs cracks** on besoin d'un mot de passe. Cool non ?

:::

# L'authentification sur KERNACRAFT
Pour éviter que les compte cracks puissent être volés, nous avons ajouter une authentication, nécessaire pour tout joueur crack, qui sécurisé votre compte

# Comment ça marche ?
Lors de votre première connexion, vous deverais entrer la commande `/register` avec votre mot de passe (`/register MonMotDePasse MonMotDePasse`) Il vous faudra ensuite à chaque connexion entrer la commande `/login MonMotDePasse` pour pouvoir jouer

# Mais pourquoi ?
Vous ne l'avez peux être pas remarqué, mais vous pouvez choisir n'importe quel pseudo en tant que crack. N'importe qui pourrait donc prendre votre pseudo et voler votre stuff... Ce mot de passe est donc la meilleur façon de protéger votre compte.

# Autres commandes utiles
Voici la liste des commandes utiles qui concernent l'authentification.

 - `/login <password>`: Se connecter avec son mot de passe
 - `/logout`: Se déconnecter (il utiliser /login à nouveau pour pouvoir jouer sur votre compte. Utiliser cette commande quand vous jouer dans des lieux publics)
 - `/register [password] [verifyPassword]`: Enregistrer un mot de passe
 - `/unregister <password>`: Supprimer son compte
 - `/changepassword <oldPassword> <newPassword>`: Changer votre mot de passe
 - `/email add <email> <verifyEmail>`: Ajouter un email, utilisable en cas d'oubli du mot de passe
 - `/email show`: Afficher l'adresse e-mail lié au compte
 - `/email change <oldEmail> <newEmail>`: Changer l'adresse email lié au compte
 - `/email recover <email>`: Envoyer une requête pour récupérer son mot de passe par email
 - `/email code <code>`: Utiliser le code reçu par e-mail pour débloquer votre compte
 - `/email setpassword <password>`: Utiliser l'email pour changer de mot de passe
