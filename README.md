# Portfolio — Yohann Ekambie Souamy (PFE 2027)

Nouvelle version validée avec radar SOC interactif, carte de compétences, défis pédagogiques, six études de cas et parcours professionnel.

## Déploiement Vercel

Le projet est compatible avec Vercel en mode déploiement de fichiers statiques. La commande `npm run build` copie l’accueil et les fichiers publics dans `dist/`. Les rapports originaux sont dans `public/rapports`.

Sur votre machine, remplacez les fichiers de votre dépôt local GitHub `Neluyah/portfolio-yekambie` par ceux de cette archive, puis exécutez :

```powershell
git status
npm run build
git add -A
git commit -m "Portfolio PFE 2027 - refonte interactive V04"
git push origin main
```

Si le dépôt n’est pas encore cloné :

```powershell
git clone https://github.com/Neluyah/portfolio-yekambie.git
cd portfolio-yekambie
```

Puis copiez les fichiers de cette archive dans le répertoire `portfolio-yekambie` avant les commandes ci-dessus. Ne copiez pas l’archive elle-même, mais son contenu.

Après l’envoi, consulter l’onglet Deployments de Vercel pour confirmer le déploiement et vérifier que le domaine yekambie.com est bien associé au projet.

## Notes

- Les études de cas mentionnent les limites et distinguent les travaux en cours des stages.
- Le radar, la carte et le jeu SOC utilisent des événements fictifs.
- L’ancien CV Bac+4 n’est pas inclus dans cette version publiée.
- Le code React initial reste dans `src/` pour archivage, mais l’accueil actuel est autonome en HTML/CSS/JS.
- Le site actuel n’a pas été modifié directement par ces fichiers : il faut envoyer le commit à GitHub.
