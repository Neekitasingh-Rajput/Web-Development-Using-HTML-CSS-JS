from django.shortcuts import render

def home(request):
    """
    Home page view
    Demonstrates Django's URL dispatcher
    """
    context = {
        'title': 'Home Page',
        'message': 'Welcome to Django URL Dispatcher Demo',
        'student_name': 'Neekitasingh Rajput',
        'roll_no': '2441339'
    }
    return render(request, 'home.html', context)

def signin(request):
    """
    Sign In page view
    Accessed via {% url 'signin' %} tag
    """
    context = {
        'title': 'Sign In',
        'message': 'Please sign in to continue'
    }
    return render(request, 'signin.html', context)