const { decode } = require('next-auth/jwt')

exports.handler = async (event) => {
	const { authorizationToken } = event

	const { Parameters } = await new aws.SSM()
		.getParameters({
			Names: ['NEXTAUTH_SECRET'].map((secretName) => process.env[secretName]),
			WithDecryption: true,
		})
		.promise()

	const decodedJWT = await decode({
		secret: Parameters[0].Value,
		token: authorizationToken,
	})
	const response = {
		isAuthorized: decodedJWT.sub ? true : false,
		resolverContext: decodedJWT,
		deniedFields: [`Mutation.createEvent`],
		ttlOverride: 300,
	}
	return response
}
