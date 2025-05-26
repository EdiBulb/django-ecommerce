from rest_framework import serializers # Serializer는 파이썬 객체와 Json 메세지 사이의 번역기 같은 존재재
from django.contrib.auth.models import User
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product # Product 모델을 번환. convert Product model.
        fields = '__all__' # 모든 필드를 가져온다. bring all fields.