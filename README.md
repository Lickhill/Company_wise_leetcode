# Company-wise LeetCode Problems

A Next.js application that organizes LeetCode problems by company, helping developers prepare for technical interviews at top tech companies.

## 🚀 Features

- **Company-based Organization**: Browse problems by Google, Amazon, Microsoft, Facebook, and more
- **Real Data**: Fetches actual interview frequency data from reliable sources
- **Dynamic Company Logos**: Auto-generates logos for companies without predefined ones
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Search**: Quickly find companies and problems
- **Direct LeetCode Links**: Click to solve problems directly on LeetCode

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.7 with React 19
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **Deployment**: Vercel (optimized)
- **Analytics**: Vercel Analytics & Speed Insights

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Lickhill/Company_wise_leetcode.git
cd Company_wise_leetcode
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Deploy
vercel

# Follow the prompts to configure your project
```

### Option 2: Deploy via GitHub Integration
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Environment Variables
No environment variables are required for basic functionality. Optional variables can be set in Vercel dashboard:

- `NEXT_PUBLIC_APP_URL`: Your deployment URL
- `NEXT_PUBLIC_ENABLE_ANALYTICS`: Enable Vercel Analytics
- `NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS`: Enable Speed Insights

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main application page
│   ├── sitemap.ts          # SEO sitemap generator
│   └── globals.css         # Global styles
├── components/
│   ├── CompanyCard.tsx     # Company display component
│   └── ProblemList.tsx     # Problem list component
├── services/
│   └── dataService.ts      # Data fetching and processing
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🎯 Key Features for Production

- **SEO Optimized**: Comprehensive metadata, sitemap, robots.txt
- **Performance**: Vercel Analytics and Speed Insights integration
- **Security**: Security headers configured in vercel.json
- **Caching**: Optimized image loading with Next.js Image component
- **Error Handling**: Graceful fallbacks for API failures
- **Type Safety**: Full TypeScript coverage

## 📊 Data Sources

- **Primary**: Real company interview data from GitHub repositories
- **Company Logos**: Official company websites and CDNs
- **Fallback**: Auto-generated SVG logos for consistency

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [https://company-wise-leetcode.vercel.app](https://company-wise-leetcode.vercel.app)
- **Repository**: [https://github.com/Lickhill/Company_wise_leetcode](https://github.com/Lickhill/Company_wise_leetcode)
- **LeetCode**: [https://leetcode.com](https://leetcode.com)

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](https://github.com/Lickhill/Company_wise_leetcode/issues) on GitHub.

---

**Happy Coding!** 🎉 Good luck with your technical interviews!
