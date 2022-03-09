const withImages = require('next-images')
module.exports = withImages({
    images: {
      disableStaticImages: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  
})
