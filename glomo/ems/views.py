from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response
from . serializer import *
from rest_framework import status
from django.db.models import Q

# # accounts/views.py
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from rest_framework.permissions import AllowAny
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from django.contrib.auth.models import User
# from rest_framework.permissions import IsAuthenticated

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
        

class EmployeeSearchView(APIView):
    def get(self, request):
        query = request.GET.get('q', '')
        employees = Employee.objects.filter(
            Q(name__icontains=query) | Q(last_name__icontains=query) | Q(job_title__icontains=query) | Q(department__icontains=query)
        )
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

        

# Custom Token Obtain Pair View to issue JWT token
# class CustomTokenObtainPairView(TokenObtainPairView):
#     permission_classes = [AllowAny]  # Public access to login

# # Token refresh view to issue new access token
# class CustomTokenRefreshView(TokenRefreshView):
#     permission_classes = [AllowAny]  # Public access to refresh the token

# # Example of a protected view (only accessible with a valid JWT token)
# class ProtectedView(APIView):
#     permission_classes = [IsAuthenticated]  # Only authenticated users can access

#     def get(self, request):
#         return Response({'message': 'You have access to this protected endpoint!'})

        
