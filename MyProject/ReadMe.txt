TIMESHEET APPLICATION

On the client side using React, while on the server side using Django framework (Python)


IMPORTANT:
In order for the project to work, it is necessary to:
-The computer must have a Windows operating system
-Python 3.8 or higher must be installed on the computer
-It must be possible to install the package via pip => https://www.youtube.com/watch?v=mFqdeX1C-8M


First step:
-To run and install the application you need to run the file run.py, run.py will install everything you need
 packages that will be needed to run the application, and when run.py is run the next time it will just run
 application without installing unnecessary things that are already installed, when run.py does everything that is needed, needed
 is to leave the CMD on and go to the next step

Second step:
-When the server is already running, you need to click on the openBrowser.py file that will open the application with
curent date and you can continue using the application. Http://127.0.0.1:8000/YYYY-MM-DD must be entered in the Web browser
the application will not work if the following link is entered (http://localhost:8000/YYYY-MM-DD)
Napomena:


_________________________________________________________________________

If you cannot run run.py, you need to manually configure the application,
you will do this by executing the following commands:

-Start CMD in the MyProject directory (When the application is launched for the first time)
    -python -m pip install virtualenv
    -cd App
    -cd app
    -npm install
    -npm run build
    -cd ..
    -cd..
    -python -m venv env
    -cd env
    -cd Scripts
    -activate
    -cd ..
    -cd ..
    -cd App
    -pip install -r req.txt
    -python manage.py runserver

   
    -Open the Web Browser (Chrome, Opera ...) and type http://127.0.0.1:8000/YYYY-MM-DD (Any date in this format)


-Start CMD in the MyProject directory (When the application is launched next time
    -cd env
    -cd Scripts
    -activate
    -cd ..
    -cd ..
    -cd App
    -python manage.py runserver

    -Open the Web Browser (Chrome, Opera ...) and type http://127.0.0.1:8000/YYYY-MM-DD (Any date in this format)






