import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      allowedDomains: ["boostpe.vercel.app"],
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const allowedEmails = [
          "fabohax@gmail.com",
        ];
        return allowedEmails.includes(profile.email) || profile.email_verified;
      }
      return true;
    },
  }
  
})