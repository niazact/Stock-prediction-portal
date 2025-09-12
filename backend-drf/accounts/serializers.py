from rest_framework import serializers
from django.contrib.auth.models import User 


class UserSerailizer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,style={'input_type':'password'})
    class Meta:
        model = User 
        fields = ['username','email','password']

    # create_user for automatically hasing the password
    # create just saves the password in plain text.
    # user.objects.create_user(**validated_data) for required fields only 
    
    def create(self,validated_data):
        user= User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
         
        )
        return user 