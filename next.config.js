/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true,
    //serverComponentsExternalPackages:["react-bootstrap"]
  },
  compiler: {

    styledComponents: true
    
    }
  
}


module.exports = nextConfig
