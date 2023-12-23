FROM python:3.10

WORKDIR /usr/src/app

COPY requirements.txt ./

COPY hahaBack/ .

RUN pip3 install --no-cache-dir -r requirements.txt


#CMD [ "python3", "manage.py", "runserver" , "0.0.0.0:8000"]
CMD python3 manage.py runserver 0.0.0.0:8000




