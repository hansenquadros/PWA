from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from . import app_settings
# Create your views here.


def home(request):
    return render(request, 'index.html')


def sw(request):
    response = HttpResponse(open(app_settings.PWA_SERVICE_WORKER_PATH).read(), 
    content_type='application/javascript')
    return response