from django.db import models

#Create model Tasks in database 
class Tasks (models.Model):
    task_date = models.DateField()
    task_name = models.CharField(max_length = 200)
    task_hour = models.IntegerField(2)

           



