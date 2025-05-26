from django.shortcuts import render
from django.http import JsonResponse
from .products import products

# add django rest framwork.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product

from .serializer import ProductSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    return Response('Hello')


@api_view(['GET']) # GET 요청만 받는 API 뷰. Receive only GET Request.
def getProducts(request): # '상품 목록을 달라' 는 요청이 들어오면 실행되는 함수
    
    products = Product.objects.all() # DB에서 모든 Product를 꺼내옴
    serializer = ProductSerializer(products, many=True) # 번역기 준비
    return Response(serializer.data)


@api_view(['GET']) # 이건 pk가 함께 넘어올 때, 단일 상품을 조회하는 함수
def getProduct(request, pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product, many=False)

    return Response(serializer.data)