
A SAVOIR SUR LA MISE EN PLACE DE SELECT2

body doit avoir {margin:0;} pour que la liste se positionne au bon endroit.

Par d�faut sur ce master, l'appel au theme 'default' a �t� comment�, on utilise le theme 'classic'.
Par d�faut sur ce master, le css pour 'multiple' a �t� comment�.
Si besoin, les @import � "multiple" sont � d�commenter dans
- select2.scss
- layout.scss de tous les themes (default et classic)

Pour modifier les tailles, couleurs etc.. css�: remplir les variables dans _defaults.scss

Le plugin perfect Scrollbar a �t� int�gr� au master.
Son appel se fait au premier clic sur le span de select2.
