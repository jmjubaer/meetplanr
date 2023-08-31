import googleImg from '../assets/google.png';
import githubImg from '../assets/github.png';
import Image from 'next/image';
import { UserAuth } from '@/providers/AuthProvider';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const SocialAuth = ({ router, setError }) => {
	const { continueWithGoogle, continueWithGithub, setLoading } = UserAuth();

	const handleGoogleAuth = () => {
		const addUserToServer = async (name, email) => {
			try {
				const response = await axios.post('/api/addNewUser', { name, email });
			} catch (error) {
				// the error is not important here!
			}
		};
		continueWithGoogle()
			.then((data) => {
				addUserToServer(data.user.displayName, data.user.email);
				setLoading(false);
				toast.success('Successfully logged in!');
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			});
	};

	const handleGithubAuth = () => {
		continueWithGithub()
			.then((data) => {
				setLoading(false);
				toast.success('Successfully logged in!');
				// Redirect to Google OAuth consent screen
				const oAuth2Client = getGoogleApiClient();
				const authUrl = oAuth2Client.generateAuthUrl({
					access_type: 'offline',
					scope: ['https://www.googleapis.com/auth/calendar.events']
				});
				router.push(authUrl);
				router.push('/');
			})
			.catch((err) => {
				console.log(err.message);
				setError(err.message);
				setLoading(false);
			});
	};

	return (
		<>
			<div className="divider text-xs">or continue with</div>
			<div className="md:pb-4 flex items-center justify-center gap-2 pb-12">
				<Image
					onClick={handleGoogleAuth}
					className="hover:scale-105 active:scale-90 duration-200 cursor-pointer"
					src={googleImg}
					alt="google"
					width={50}
				/>
				<Image
					onClick={handleGithubAuth}
					className="hover:scale-105 active:scale-90 duration-200 cursor-pointer"
					src={githubImg}
					alt="github"
					width={50}
				/>
			</div>
		</>
	);
};

export default SocialAuth;
