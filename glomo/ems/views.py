from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from . serializer import *

# Create your views here.
class EmployeeView(APIView):
    serializer_class = EmployeeSerializer

    def get(self, request):
        employee = [{"name":employee.name, "last_name":employee.last_name, 
                     "job_title":employee.job_title, "department": employee.department}
        for employee in Employee.objects.all()]
        return Response(employee)
    
    def post(self, request):
        serializer = EmployeeSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
