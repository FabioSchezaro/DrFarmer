from django.shortcuts import render
from random import randint

def index(request):
    return render(request, 'graficos.html', {"pulsoCardio": randint(0, 50), "pulsoOximetria": randint(50, 100)})