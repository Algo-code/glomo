from rest_framework import serializers
from .models import *

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['name','last_name','job_title','department']