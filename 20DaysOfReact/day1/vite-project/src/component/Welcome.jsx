import Sammy from '../img/small.jpeg'
import '../css/main.css'

export default function Welcome() {
	return (
		<>
			<div className='wrapper'>
				<h1>Welcome to ancient one! Fellas.</h1>
				<p>This is going to be much fun later on. </p>
				<img src={Sammy} alt='Sammy image' width={200} height={200} />
			</div>
		</>
	)
}
