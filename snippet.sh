#!/bin/bash


UPPER=$1
LOWER=$(echo "$UPPER" | awk '{print tolower($0)}')
LOCATION=$2

mkdir "./js/content/$LOCATION"
touch "./js/content/$LOCATION/$UPPER.jsx"
touch "./js/content/$LOCATION/style.module.css"

echo ".$LOWER {" >> "./js/content/$LOCATION/style.module.css"
echo "composes: paragraph from '../shared.module.css';" >> "./js/content/$LOCATION/style.module.css"
echo "}" >> "./js/content/$LOCATION/style.module.css"

echo "export { default as $UPPER } from './$LOCATION/$UPPER';" >> "./js/content/index.js"


echo "import style from './style.module.css'" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "import React from 'react';" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "const $UPPER = () => {" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "return (" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "<div className={style.$LOWER}>" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "</div>" >> "./js/content/$LOCATION/$UPPER.jsx"
echo ");" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "}" >> "./js/content/$LOCATION/$UPPER.jsx"
echo "export default $UPPER;" >> "./js/content/$LOCATION/$UPPER.jsx"

