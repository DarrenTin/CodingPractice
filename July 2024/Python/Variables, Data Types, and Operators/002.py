import requests
import sys
from PyQt5.QtCore import *
from PyQt5.QtGui import *
from PyQt5.QtWidgets import *

def window():
   app = QApplication(sys.argv)
   w = QWidget()
   b = QLabel(w)
   b.setText(str(data['conversion_rates'][to_currency]))
   w.setGeometry(100,100,200,50)
   b.move(50,20)
   w.setWindowTitle("PyQt5")
   w.show()
   sys.exit(app.exec_())

from_currency = 'USD'
to_currency = 'MYR'
# date = '/2024/7/26'

url = 'https://v6.exchangerate-api.com/v6/45901327a59abe97e21c7c02/latest/' + from_currency
# url = 'https://v6.exchangerate-api.com/v6/45901327a59abe97e21c7c02/history/' + from_currency + date

response = requests.get(url)
data = response.json()
window()
# print(data['conversion_rates'][to_currency])