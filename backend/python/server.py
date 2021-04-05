import sys
import os
from http.server import HTTPServer, CGIHTTPRequestHandler


port=8777
if (len(sys.argv) > 1) :
 port=int(sys.argv[1])

os.chdir('./webfiles')

server_object = HTTPServer(server_address=('', port), RequestHandlerClass=CGIHTTPRequestHandler)

print("Listening on port: " + str(port))
server_object.serve_forever()
