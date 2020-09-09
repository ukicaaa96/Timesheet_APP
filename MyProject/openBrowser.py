import webbrowser
from datetime import datetime

dateToday = datetime.today().strftime('%Y-%m-%d')

url = "http://127.0.0.1:8000/"+ dateToday

webbrowser.open(url)
