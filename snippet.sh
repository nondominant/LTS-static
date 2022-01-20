#!/bin/bash


UPPER=$1
LOWER=$(echo "$UPPER" | awk '{print tolower($0)}')
LOCATION=$2

mkdir "./pages/content/$LOCATION"
touch "./pages/content/$LOCATION/$UPPER.jsx"
touch "./pages/content/$LOCATION/$LOWER.module.css"

echo ".container {" >> "./pages/content/$LOCATION/$LOWER.module.css"
echo "padding: 4px;" >> "./pages/content/$LOCATION/$LOWER.module.css"
echo "margin: 4px;" >> "./pages/content/$LOCATION/$LOWER.module.css"
echo "text-align: justify;" >> "./pages/content/$LOCATION/$LOWER.module.css"
echo "}" >> "./pages/content/$LOCATION/$LOWER.module.css"

echo "export { default as $UPPER } from './$LOCATION/$UPPER';" >> "./pages/content/index.js"


echo "import style from './$LOWER.module.css'" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "import React from 'react';" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "const $UPPER = () => {" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "return (" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "<div className={style.container}>" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "</div>" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo ");" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "}" >> "./pages/content/$LOCATION/$UPPER.jsx"
echo "export default $UPPER;" >> "./pages/content/$LOCATION/$UPPER.jsx"

(echo "$UPPER," | xclip -selection c)
echo "component name saved to clipboard"
