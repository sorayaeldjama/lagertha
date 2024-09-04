#!/bin/bash

printf "\n";
printf "################################\n"
printf "Importing FR translations\n"
printf "################################\n"
printf "\n";

curl  -X GET \
      -o public/locales/fr/common.json \
      'https://localise.biz/api/export/locale/fr-FR.json?key=tTcZmLg8iLBzQVI6FtzoS6DaanouH7LQ'