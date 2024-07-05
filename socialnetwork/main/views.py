from django.shortcuts import render , redirect 
from django.http import HttpResponse , JsonResponse
from main.models import User


# Create your views here.

def main(request):
    return render(request , 'frontend/index.html')

def login(request):
    d = { 'login':'obama' , 'password': "babama21331"}
    users = User.objects.create(email="")

    return JsonResponse(d)

def mainr(request , file ):
    return redirect(f"static/{file}")
