# 500 mots du Coran

Appli personnelle pour apprendre les 500 mots les plus fréquents du Coran avec des flashcards à 3 choix et la répétition espacée. Elle s'installe sur l'iPhone depuis Safari, sans App Store, et marche hors connexion.

## Mettre l'appli en ligne avec GitHub Pages (gratuit, 5 minutes)

À faire depuis un ordinateur.

1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas.
2. Clique sur **New repository** (bouton « + » en haut à droite).
   - Nom : `500-mots`
   - Visibilité : **Public** (obligatoire pour GitHub Pages gratuit)
   - Clique sur **Create repository**.
3. Sur la page du dépôt, clique sur **uploading an existing file**.
4. Glisse **tout le contenu** de ce dossier dans la page : `index.html`, `sw.js`, `manifest.webmanifest`, `README.md` et les dossiers `icons` et `fonts`. Puis clique sur **Commit changes**.
5. Va dans **Settings → Pages**.
   - Source : **Deploy from a branch**
   - Branch : **main** et dossier **/ (root)**, puis **Save**.
6. Attends 1 à 2 minutes. Ton appli est en ligne à l'adresse :
   `https://TON-PSEUDO.github.io/500-mots/`

## L'installer sur l'iPhone

1. Ouvre l'adresse dans **Safari** (pas Chrome).
2. Touche le bouton **Partager** (le carré avec la flèche).
3. Choisis **Sur l'écran d'accueil**, puis **Ajouter**.

L'icône apparaît sur ton écran d'accueil. L'appli s'ouvre en plein écran et marche sans internet (sauf le bouton « Récitation » et le lien « Traduction »).

## Comment ça marche

- **Ordre** : les mots arrivent du plus fréquent au moins fréquent. Les 10 premiers couvrent déjà plus d'un tiers du texte, parce que و، الـ et les pronoms reviennent partout.
- **Nouveau mot** : il s'affiche d'abord avec son sens, ses formes et un verset, puis revient en question quelques cartes plus tard.
- **Répétition espacée** (méthode SM-2, inspirée de la courbe de l'oubli d'Ebbinghaus) : un mot raté revient dans la même séance, puis le lendemain. Un mot réussi revient de plus en plus tard (1 jour, 3 jours, 1 semaine, 3 semaines…). Une bonne réponse lente (plus de 6 secondes) espace moins le mot.
- **Sens inverse** : pour les mots bien appris, le français s'affiche et tu choisis le mot arabe.
- **Couverture** : l'accueil affiche le pourcentage du texte du Coran que tu reconnais, et une barre où chaque trait est un mot, large comme sa fréquence.

## Ta progression

Elle est enregistrée sur ton téléphone, dans l'appli. Pense à faire **Réglages → Copier ma progression** de temps en temps : si tu supprimes l'appli ou changes de téléphone, tu pourras la restaurer avec **Restaurer**.

## Mettre à jour l'appli

Remplace `index.html` (et `sw.js`) dans ton dépôt GitHub. L'iPhone récupère la nouvelle version à la prochaine ouverture de l'appli (parfois il faut l'ouvrir deux fois).

## Sources

- Fréquences : [Quranic Arabic Corpus](https://corpus.quran.com) (analyse morphologique mot par mot, 77 429 mots), version publiée par mustafa0x/quran-morphology. Les préfixes (و، ف، بـ، الـ…) et les pronoms suffixes comptent comme des mots : les 500 mots couvrent ainsi 88,3 % du texte.
- Traductions françaises des mots : courtes et simplifiées pour la mémorisation. Pour le sens d'un verset, le lien « Traduction » ouvre quran.com.
- Récitation : Mishary Alafasy, via everyayah.com (en ligne seulement).
- Police arabe : Amiri Quran (licence SIL Open Font License, voir `fonts/OFL.txt`). Polices latines : Alegreya et Alegreya Sans (même licence).
