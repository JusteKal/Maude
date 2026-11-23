# MaudeSite

Site vitrine de Maude, le bot Discord de guilde WoW. HTML, CSS et un peu de JavaScript, sans outil de construction : GitHub Pages le sert tel quel.

## Mettre en ligne sur GitHub Pages

1. Créer un dépôt **public** `MaudeSite` sur GitHub et y pousser ce dossier.
2. Dans le dépôt : **Settings → Pages → Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Le site est en ligne quelques minutes plus tard sur `https://justekal.github.io/MaudeSite/`.

Si le dépôt porte un autre nom, ou avec un nom de domaine personnalisé, mettre à jour l'adresse de l'image d'aperçu dans `index.html` (`og:image`, la seule adresse absolue du site).

Le fichier `.nojekyll` indique à GitHub de servir les fichiers sans les transformer.

## Avant de partager le lien

- **Bot public** : dans le [portail développeur Discord](https://discord.com/developers/applications), application Maude, onglet **Bot**, l'option **Public Bot** doit être activée pour que d'autres serveurs puissent l'ajouter.
- **Fonctions de guilde** : les événements, `/metier` et `/wow` ne marchent que sur les serveurs listés dans `WOW_GUILD_IDS` (`.env` de MaudeBot). Le site le dit dans la foire aux questions.

## Lien vers la page de statut

Quand MaudeStatus sera en ligne sur le VPS, renseigner son adresse en haut de `main.js` :

```js
const STATUS_URL = "https://status.mondomaine.fr";
```

Les liens « Statut » (navigation, questions, pied de page) apparaissent alors d'eux-mêmes. Tant que l'adresse est vide, ils restent masqués.

## Contenu

| Fichier                    | Rôle                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `index.html`               | La page : héros, fonctionnalités, commandes, questions        |
| `style.css`                | Styles (graphite et violet de Maude, Inter)                  |
| `main.js`                  | Menu mobile, bouton du son de la vidéo, apparition au défilement |
| `assets/video/maude.mp4`   | Vidéo de présentation (avec musique de Musinova, Pixabay)    |
| `assets/og.jpg`            | Image d'aperçu sur Discord et les réseaux (1200 × 630)       |

Pour mettre à jour la liste des commandes, modifier la section `#commandes` de `index.html`.

## Voir le site en local

```powershell
python -m http.server 8099
```

Puis ouvrir http://127.0.0.1:8099.
