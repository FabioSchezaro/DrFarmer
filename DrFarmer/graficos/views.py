from django.shortcuts import render
from random import randint

def index(request):
    return render(request, 'graficos.html', {"valorEixoY": randint(15, 25)})