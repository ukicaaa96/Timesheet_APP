from django.shortcuts import render
from django.db import connection
from .models import Tasks
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TasksSerializer




#This method return all data from database
@api_view(['GET']) 
def tasksList(request):

    tasks = Tasks.objects.all()
    serializer = TasksSerializer(tasks, many = True)

    return Response (serializer.data)

#This method return all data from database where task_date field equal to date from GET request
@api_view(['GET'])
def tasksDetail(request, date):

    taskList = []
    tasks = Tasks.objects.filter(task_date = date)
    serializer = TasksSerializer(tasks, many = True) 

    return Response (serializer.data)

#This method recive JSON file and put this recived data in database
@api_view(['POST'])
def tasksCreate(request):
    serializer = TasksSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()

    return Response (serializer.data)
















