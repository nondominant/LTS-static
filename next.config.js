const withImages = require('next-images')
module.exports = withImages({
    images: {
    loader: 'imgix',
    path: '/',
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
  
})
