from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('graficos/', include('graficos.urls')),
    path('admin/', admin.site.urls),
]