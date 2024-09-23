import cv2
from flask_cors import CORS
from flask import Flask, request, render_template, Response

app = Flask(__name__)
CORS(app)

###############  Main  ###############
######################################

@app.route('/')
def home():
	return {"greeting": "Hello from Flask!"}
	# return render_template('index.html', content="Hello Kongrith !!!!")

''' Video streaming generator function
				width x height
	4320p (8k): 7680x4320
	2160p (4K): 3840x2160
	1440p (2k): 2560x1440
	1080p (HD): 1920x1080
	720p (HD): 1280x720
	480p (SD): 854x480
	360p (SD): 640x360
	240p (SD): 426x240
'''
def gen():
	width = 1280
	height = 720
	vc = cv2.VideoCapture(0, cv2.CAP_V4L2)
	vc.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc('M', 'J', 'P', 'G'))
	vc.set(cv2.CAP_PROP_FRAME_WIDTH, width)
	vc.set(cv2.CAP_PROP_FRAME_HEIGHT, height)

	if vc.isOpened():
		while True:
			ret, frame = vc.read()
			if ret:
				cv2.imwrite('tmp_pic.jpg', frame)
				yield (b'--frame\r\n'
					b'Content-Type: image/jpeg\r\n\r\n' + open('tmp_pic.jpg', 'rb').read() + b'\r\n')
		vc = cv2.release()
	cv2.destroyAllWindows()

"""Video streaming route. Put this in the src attribute of an img tag."""
@app.route('/streaming_camera')
def video_feed():
	return Response(gen(), mimetype='multipart/x-mixed-replace; boundary=frame')

# @app.route('/control')
# def control():
# 	return render_template('telecontrol.html')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
