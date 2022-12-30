import type { NextApiRequest, NextApiResponse } from 'next'
import { withSSRContext } from 'aws-amplify'
import { listTodos } from '../../src/graphql/queries'

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	const { API } = withSSRContext({ req: request })
	const data = await API.graphql({
		query: listTodos,
		authMode: 'AWS_LAMBDA',
		authToken: request.cookies['next-auth.session-token'],
	})

	//main.fdsrrw.amplifyapp.com --> mySite.com
	//apiId.fdsaf.com/graphql --> api.mySite.com
	// do stuff with data
	response.status(200).json(data)
}
