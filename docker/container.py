#!/usr/bin/python
import subprocess, os, sys, re, time

def find_image_id():
    pattern = re.compile(r"kneerunjun/nglearning")
    version_pattern = re.compile(r"latest")
    for img in subprocess.check_output(["docker", "images"]).decode("utf-8").splitlines()[1:]:
        if len(pattern.findall(img)) >0:
            return img.split()[2]
    return ""
# stop all the running cotainers of the same image and then proceed
def container_up():
    # get the relevant image id and then search for the containers running
    image_id  = find_image_id()
    if image_id != "" and not image_id is None:
        cmd="docker ps"
        running_containers=subprocess.check_output(cmd.split()).decode("utf-8").splitlines()[1:]
        print("Checking for running containers of the image: {0}".format(image_id))
        for c in running_containers:
            if len(re.findall(image_id, c))>0 :
                container_id  = c.split()[0]
                print("stopping container with id :{0}".format(container_id))
                cmd ="docker stop {0}".format(container_id)
                subprocess.call(cmd.split())
                print("removing container with id :{0}".format(container_id))
                cmd ="docker rm {0}".format(container_id)
                subprocess.call(cmd.split())
        cmd = """docker run -d -p 8037:8080 \
         -v /run/media/kneerunjun/jaro-extension/nglearning/www:/var/nglearning/www \
         -v /run/media/kneerunjun/jaro-extension/libs/npm/node_modules:/var/www-commons/npm/node_modules \
         -v /run/media/kneerunjun/jaro-extension/nglearning/store:/var/nglearning/store \
         -v /run/media/kneerunjun/jaro-extension/nglearning/http:/var/nglearning/http \
         {0}
         """.format(image_id)
        print("starting a fresh container .. ")
        subprocess.call(cmd.split())
        for row in subprocess.check_output(["docker", "ps"]).decode("utf-8").splitlines()[1:]:
            if len(re.findall(image_id, row))>0:
                cmd ="docker exec -it {0} /bin/bash".format(row.split()[0])
                print("getting inside the container..")
                time.sleep(3)
                subprocess.call(cmd.split())
def image_build():
    dock_dir ="/run/media/kneerunjun/jaro-extension/nglearning/docker"
    os.chdir(dock_dir)
    cmd ="docker build -t kneerunjun/nglearning:latest ."
    subprocess.call(cmd.split())
if len(sys.argv)>1:
    if  "-up" in sys.argv:
        container_up()
    if "-build" in sys.argv:
        image_build()
