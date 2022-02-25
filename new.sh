#!/bin/bash


UPPER=$1
LOWER=$(echo "$UPPER" | awk '{print tolower($0)}')
LOCATION=$2

mkdir "./js/$LOCATION/$LOWER"
touch "./js/$LOCATION/$LOWER/$UPPER.jsx"
touch "./js/$LOCATION/$LOWER/$LOWER.module.css" 

echo "export { default as $UPPER } from './$LOWER/$UPPER';" >> "./js/$LOCATION/index.js"

echo "import React from 'react';" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "import { useRef, useState, useEffect } from 'react';" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "import style from './$LOWER.module.css'" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "const $UPPER = (props) => {" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "let objProp = props.objectProps;" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "return (" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"

echo " <div id={objProp.id}>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "  <div className={style.container}>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "   <div className={style.child}>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "    {props.children}" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "   </div>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "  </div>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo " </div>" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"

echo ");" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "}" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
echo "export default $UPPER;" >> "./js/$LOCATION/$LOWER/$UPPER.jsx"
