
class CORSHeadersMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.method == "OPTIONS":
            response = HttpResponse()
            response["Access-Control-Allow-Origin"] = "http://localhost:5173"
            response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            response["Access-Control-Allow-Headers"] = "Origin, Content-Type, Accept, Authorization, X-Requested-With"
            return response

        response = self.get_response(request)
        response["Access-Control-Allow-Origin"] = "http://localhost:5173"
        response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        response["Access-Control-Allow-Headers"] = "Origin, Content-Type, Accept, Authorization, X-Requested-With"
        return response