from django.urls import path

from . import views

urlpatterns = [
    
    path('getTasks/', views.tasksList, name='tasksList'),
    path('getTasksDetail/<str:date>/', views.tasksDetail, name='tasksDetail'),
    path('tasksCreate/', views.tasksCreate, name='tasksCreate'),
]