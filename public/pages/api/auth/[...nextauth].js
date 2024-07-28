import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      allowedDomains: ["boostperu.com.pe"],
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        const allowedEmails = [
          "fabohax@gmail.com",
          "luislopez@boostperu.com.pe",
          "atencionalcliente@boostperu.com.pe",
        ];
        return allowedEmails.includes(profile.email) || profile.email_verified;
      }
      return true;
    },
  }
  
})