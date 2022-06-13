from django.shortcuts import render
from django.http import JsonResponse
import pandas as pd
from pandas import *
from IPython.display import display 

# Create your views here.

def employeeview(request):
    emp={
        'id':101,
        'name':'asim'
    }
    dataframe1 = pd.ExcelFile("C:\\Users\\askhanda\\Documents\\PILOT2_R1.0_it355_IP_WDM.xlsm")
    df1 = pd. read_excel(dataframe1, 'Trails (out)')
    print(df1)       
    return JsonResponse(df1.to_dict())