
A SAVOIR SUR LA MISE EN PLACE DE SELECT2

body doit avoir {margin:0;} pour que la liste se positionne au bon endroit.

Par défaut sur ce master, l'appel au theme 'default' a été commenté, on utilise le theme 'classic'.
Par défaut sur ce master, le css pour 'multiple' a été commenté.
Si besoin, les @import à "multiple" sont à décommenter dans
- select2.scss
- layout.scss de tous les themes (default et classic)

Pour modifier les tailles, couleurs etc.. css : remplir les variables dans _defaults.scss

Le plugin perfect Scrollbar a été intégré au master.
Son appel se fait au premier clic sur le span de select2.
