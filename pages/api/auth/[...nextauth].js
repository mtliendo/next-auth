import NextAuth from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		TwitterProvider({
			clientId: process.env.TWITTER_ID,
			clientSecret: process.env.TWITTER_SECRET,
			version: '2.0', // opt-in to Twitter OAuth 2.0
		}),
		// ...add more providers here
	],
	// callbacks: {
	// 	jwt: async ({ token, user, account, profile, isNewUser }) => {
	// 		console.log('this is the token in the jwt', token)

	// 		return await token
	// 	},
	// 	session: async ({ session, token }) => {
	// 		console.log('this is the token in th session', token)
	// 		console.log(session)
	// 		if (!session?.user) {
	// 			return session
	// 		}

	// 		session.accessToken = token.account.accessToken

	// 		return session
	// 	},
	// },
}

export default NextAuth(authOptions)
