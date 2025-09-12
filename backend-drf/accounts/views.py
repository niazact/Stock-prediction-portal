from django.shortcuts import render
from .serializers import UserSerailizer
from rest_framework import generics 
from django.contrib.auth.models import User 
from rest_framework.permissions import AllowAny


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerailizer 
    permission_classes=[AllowAny]