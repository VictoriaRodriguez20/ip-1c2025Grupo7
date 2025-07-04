from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SubscribeForm(forms.Form):
    email = forms.EmailField()

class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = User
        fields = ('first_name','last_name','username','email', 'password1', 'password2')
