from django.shortcuts import render
from random import randint

def index(request):
    return render(request, 'graficos.html', {"valorEixoY": 15})