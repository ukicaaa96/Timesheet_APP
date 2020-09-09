from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path('db/', include('Connection.urls')),
    #This url open index.html page (App)
    path('<str:date>', TemplateView.as_view(template_name = 'index.html')),
    path('admin/', admin.site.urls),
]