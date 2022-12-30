import LoginButton from '../components/LoginButton'
import { useSession, getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'
import { decode, encode } from 'next-auth/jwt'

export default function Home() {
	const { data: session } = useSession()

	console.log('the session', session)

	const handleClick = async () => {
		// const encodeData = session?.user

		// const datas = await encode({
		// 	token: encodeData,
		// 	secret: 'WfnYd/DKwRiRiVjExLbGOqdQRGh3Y99sMiaNM8q6jFo=',
		// })

		// // run this code in Lambda
		// const daDecoded = await decode({
		// 	secret: 'WfnYd/DKwRiRiVjExLbGOqdQRGh3Y99sMiaNM8q6jFo=',
		// 	token: datas,
		// })
		// console.log('the datassss', datas)
		// console.log('the decoded', daDecoded)
		// eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..NUfJ1XKXvtZ7pVlU.Qkcoqw2NCeakoLURRApyyU7vU7pAZseM9-0Tl7I0YUhEBWIFtlt7sLb9OgBhLoEPmAS4aFInZj0rgjpcWBR4BIDKUqio8eB-qhHdt6ghr4NTeTJ4AVPkvqdqNph-OEUtBerVQFqKr5YobgPHzXtqkj2J-GoGfJSfTOPXrq7gWRnCiE5bJvtXs28PeOtaJI_MuoVOHKERxkdSfWt2hpMXxuhwqz9J8_99TGYR6PTakWzxEsJCSx_HhwN2Rhm8n_MTaAE3V59bhYvKXSZNtpLaDTDBrzCF30lidcj2HwN6HeDEnWAyYkQ.Ml8baBTMoAMy2y5k280GDw
		fetch('/api/hello')
			.then((res) => res.json())
			.then((data) => console.log(data))
	}
	return (
		<div>
			<button onClick={handleClick}>click</button>
			<LoginButton />
		</div>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getSession(context)
	console.log('server session', session)
	return {
		props: {},
	}
}
