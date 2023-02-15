docker stop ypstudio
docker container rm ypstudio
docker build -t ypstudio-nextjs .
docker run -p 3000:3000 --name ypstudio -d --network mongodb-init-docker_db --restart always ypstudio-nextjs
