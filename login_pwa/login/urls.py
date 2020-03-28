from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    path("", views.home, name='home'),
    url('^sw.js$', views.sw, name='sw'),
]
