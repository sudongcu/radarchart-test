from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('chart.html')
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=50456, debug=False)


