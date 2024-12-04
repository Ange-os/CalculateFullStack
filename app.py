from flask import Flask, render_template

app = Flask(__name__)
app.static_folder = 'static'

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/descarga")
def descarga():
    return render_template('descarga.html')

@app.route("/contacto")
def contacto():
    return render_template('contacto.html')

if __name__ == '__main__':
    app.run(debug=True)