from django.shortcuts import render , redirect 
from django.http import HttpResponse , JsonResponse
from main.models import User
from django.views.decorators.csrf import csrf_exempt
from django.core.handlers.wsgi import WSGIRequest
from django.middleware.csrf import get_token
import json


# Create your views here.

def main(request):
    return render(request , 'frontend/index.html')

def login(request: WSGIRequest):

    data = json.loads( request.body.decode() )
    print(data)
    
    d = { 'login':'obama' , 'password': "babama21331"}
    

    return JsonResponse(d)


def mainr(request , file ):
    return redirect(f"static/{file}")

def get_csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})