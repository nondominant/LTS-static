#!/bin/bash/

PAGENAME=$1
NAME=$(echo "$PAGENAME" | awk '{print tolower($0)}')


mkdir ./js/content/$NAME

while true; do
  read -p "Do you wish to create content?  " yn
  case $yn in
    [Yy]* ) /bin/bash ./snippet.sh T1_$NAME $NAME;
            /bin/bash ./snippet.sh T2_$NAME $NAME;
            /bin/bash ./snippet.sh P1_$NAME $NAME;
            /bin/bash ./snippet.sh P2_$NAME $NAME;
            break;;
    [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
  esac
done

touch ./pages/$NAME.js

cat ./template >> ./pages/$NAME.js
sed -i 's/REPLACE/$NAMELOWER/g' ./pages/$NAME.js
