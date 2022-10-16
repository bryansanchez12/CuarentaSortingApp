from flask import Flask, render_template, redirect, request, jsonify
import random
from json import JSONEncoder
import json

app = Flask(__name__, template_folder='../CuarentaApp')

names1 = ["Bryan", "Jhoan", "Mauricio", "Bryan C", "Joseph", "Lovato"]
names2 = ["Anahi", "Genesis", "Pechan", "Carlos", "Enrique", "Chuga"]
equipoName = ["Sangolqui", "Riobamba", "Mau", "Ibarra", "Acoustic", "Hengelo"]


# Homepage
@app.route("/home")
def home():
   return render_template('index.html')


# Sorteo algorithm
@app.route("/sorteo")
def sorteo():

   answer = []
   answer2 = []
   sampleSize = 8
   answerSize = 0

   while answerSize < sampleSize:
      r = random.randint(0,15)
      if r not in answer:
         answerSize += 1
         answer.append(r)

   answerSize2 = 0
   copycat = answer.copy()

   while answerSize2 < sampleSize:
      s = random.randint(0,15)
      if s not in copycat:
         answerSize2 += 1
         answer2.append(s)
         copycat.append(s)

   print("Results:")
   print("")

   i = 0
   while i < 8:
      print("> Group " + str(i+1) + ": " + str(answer[i]) + " vs " + str(answer2[i]))
      i += 1
   return redirect("/home")

if __name__ == "__main__":
   app.run(host='127.0.0.1', port=8000, debug=True)
