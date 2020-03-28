from django.conf import settings  
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PWA_SERVICE_WORKER_PATH = os.path.join(BASE_DIR, '', 'sw.js')
