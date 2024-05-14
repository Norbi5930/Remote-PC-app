from flask import render_template, redirect, request, jsonify
import os

from app_system import app

def lock_windows():
    try:
        os.system("rundll32.exe user32.dll,LockWorkStation")
        return True
    except: 
        return False

    
def restart_windows():
    try:
        os.system("shutdown /r /t 5")
        return True
    except:
        return False
    
def shutdown_windows():
    try:
        os.system("shutdown /s /t 5")
        return True
    except:
        return False


@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/lock", methods=["POST"])
def lock():
    return jsonify({"success": lock_windows()})


@app.route("/restart", methods=["POST"])
def restart():
    return jsonify({"success": restart_windows()})


@app.route("/shutdown", methods=["POST"])
def shutdown():
    return jsonify({"success": shutdown_windows()})



