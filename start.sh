printf '\nStarting rabbitmq...\n'
cd ./rabbitmq
docker-compose up -d
cd ../

printf '\nStarting cryptocompaarator service...\n'
cd ./micro-cryptocomparator
docker-compose up --build -d
cd ../

printf '\nStarting api-gateway...\n'
cd ./micro-client
docker-compose up --build -d
cd ../

printf '\nApplication has successfully started!'