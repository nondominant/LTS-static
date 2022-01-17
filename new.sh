#!/bin/bash


UPPER=$1
LOWER=$(echo "$UPPER" | awk '{print tolower($0)}')
LOCATION=$2

mkdir "./pages/$LOCATION/$LOWER"
touch "./pages/$LOCATION/$LOWER/$UPPER.jsx"
touch "./pages/$LOCATION/$LOWER/$LOWER.module.css" 

echo "export { default as $UPPER } from './$LOWER/$UPPER';" >> "./pages/$LOCATION/index.js"

echo "import React from 'react';" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "import { useRef, useState, useEffect } from 'react';" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "import style from './$LOWER.module.css'" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "const $UPPER = (props) => {" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "let objProp = props.objectProps;" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "return (" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"

echo " <div id={objProp.id}>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "  <div className={style.container}>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "   <div className={style.child}>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "    {props.children}" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "   </div>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "  </div>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo " </div>" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"

echo ");" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "}" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
echo "export default $UPPER;" >> "./pages/$LOCATION/$LOWER/$UPPER.jsx"
