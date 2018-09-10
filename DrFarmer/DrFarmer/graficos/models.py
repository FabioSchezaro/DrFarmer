from django.db import models
from random import randint

class BatimentoCardiaco (models.Model):
    batimentoCardiaco = randint(0, 50)