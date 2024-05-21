import StoryUserContainer from "@/components/StoryUserContainer";
import styles from "./page.module.scss";

const Home: React.FC = () => {
	return (
		<div className={styles.main}>
			<h2 className={styles.heading} data-cy="instagram">
				Instagram
			</h2>
			<StoryUserContainer />
		</div>
	);
};

export default Home;
