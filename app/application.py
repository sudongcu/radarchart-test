from flask import Flask, render_template

application = Flask(__name__)

@application.route('/')
@application.route('/chart')
def main():
    return render_template('chart.html')
    
if __name__ == '__main__':
    application.debug = True
    application.run()


