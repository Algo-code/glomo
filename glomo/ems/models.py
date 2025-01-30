from django.db import models

# Create your models here.
class Employee(models.Model):
    # employee_id = models.BigIntegerField(null=False, unique=True)
    name = models.CharField(max_length=100, null=False)
    last_name = models.CharField(max_length=100, null=False)
    job_title = models.CharField(max_length=200, null=False)
    department = models.CharField(max_length=200, null=False)

class User(models.Model):
    username = models.CharField(max_length=20, null=False)
    password = models.CharField(max_length=9999, null=False)
