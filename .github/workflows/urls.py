from django.urls import path
from .views import register, buyer_home, seller_home

urlpatterns = [
    path('register/', register, name='register'),
    path('buyer_home/', buyer_home, name='buyer_home'),
    path('seller_home/', seller_home, name='seller_home'),
]
