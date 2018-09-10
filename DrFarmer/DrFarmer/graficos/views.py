from django.shortcuts import render
from .models import BatimentoCardiaco

def index(request):
    batimentos = {
        "pulsoCardio": BatimentoCardiaco.batimentoCardiaco,
        "pulsoOximetria": 75
    }
    return render(request, 'graficos.html', batimentos)