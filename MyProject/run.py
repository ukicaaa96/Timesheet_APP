import os
from pathlib import Path

my_file = Path("env")
#Directory exist
if my_file.is_dir():
    os.system('cmd /k "cd env & cd Scripts & activate & cd .. & cd .. & cd App & python manage.py runserver' )
#Directory not exist    
else:
    os.system('cmd /k "python -m pip install virtualenv & cd App & cd app & npm install & npm run build & cd .. & cd.. & python -m venv env & cd env & cd Scripts & activate & cd .. & cd .. & cd App & pip install -r req.txt & python manage.py runserver' )
