NAME="zzd"
SITE=$1
# PROJECT="$PROJECTS/vue/cst-zs"
PROJECT=$PWD
cd $PROJECT

if [[ $1 == "" ]]; then
  SITE="zhoushan"
fi

echo -e "\033[1m==> Checking dependencies...\033[0m"
# [[ -d $PROJECT ]] || { echo "  --> Exiting with project not existed error..."; exit 1; }


echo -e "\033[1m==> Building frontend using npm...\033[0m"
npm run site --name=$SITE
[[ $? != "0" ]] && { echo "  --> Exiting with npm build error..."; exit 1; }


echo -e "\033[1m==> Resolving local containers...\033[0m"
[[ ! -z $(docker ps -aq --filter ancestor=$NAME) ]] && docker rm $(docker stop $(docker ps -aq --filter ancestor=$NAME)) | awk '{print "  --> "$0}'

echo -e "\033[1m==> Building new docker image...\033[0m"
# docker build -t $NAME . | awk '{print "  --> "$0}'
docker build -t $NAME .
[[ $? != "0" ]] && { echo "  --> Exiting with docker build error..."; exit 1; }

echo -e "\033[1m==> Pushing image to azura...\033[0m"
docker tag $NAME devreg.azuratech.com/$NAME
docker push devreg.azuratech.com/$NAME | awk '{print "  --> "$0}'

echo -e "\033[1m==> Saving image and house-cleaning...\033[0m"
docker save -o ./$NAME.tar devreg.azuratech.com/$NAME | awk '{print "  --> "$0}'
docker image prune -f | awk '{print "  --> "$0}'
