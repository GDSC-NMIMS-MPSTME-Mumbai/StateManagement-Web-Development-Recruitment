# #For Function 1, I have used Python requests module
# end_api is the url, response_obj is where we do the GET call, a converts the response received to json and then we print it


import json
import sys
import time
import warnings
import requests


end_api = "https://jsonplaceholder.typicode.com/albums" 

response_obj = requests.post(end_api)
print(response_obj)
a = response_obj.json()
print(a)



#Function 2 for deleting object, since I dont know Js and react well, I will be considering a situation that on a onpress event, 
# My backend Flask code will delete the entry from a SQLite Db
#Logic - the /delete path will take a param called sno aka serial number. Then it will query the table named Todo, and the first entry will be picked up.
#Then, we do db.session.delete to delete that entry and commit the changes, later we redirect the user to the homepath, assuming the path is /


@app.route('/delete/<int:sno>')
def delete(sno):
    todo = Todo.query.filter_by(sno=sno).first() #in SQLAlchemy, Query.first() returns the first of a potentially larger result set (adding LIMIT 1 to the query)
    db.session.delete(todo)
    db.session.commit()
    return redirect("/")

