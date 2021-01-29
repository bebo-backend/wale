

module.exports = {
  siteUrl: 'http://wale.vercel.app',
  generateRobotsTxt: true,
  exclude:['dashboard/profile'],
  sitemapSize:7000,
  // optional
  robotsTxtOptions: {
    policies:[
    {userAgent:'*',
    allow:['/',
    '/details/[title]/[id]',
    '/agents/[email]','/search'],
     disallow:['dashboard/profile']
  }],
    
  },
}
