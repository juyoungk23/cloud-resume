FROM python:3.8-slim

# Copy the requirements file
COPY requirements.txt /app/requirements.txt

# Set working directory
WORKDIR /app

# Install requirements
RUN pip install -r requirements.txt

# Copy the source code
COPY . /app

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["python", "app.py"]
