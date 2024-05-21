import React from "react";
import Image from "next/image";
import styles from "./StoryUser.module.scss";
import { UserListTypes } from "@/providers/ContextProvider";

interface PropTypes {
	userData: any;
	onClick: (user: UserListTypes) => void;
}

const StoryUser: React.FC<PropTypes> = ({ userData, onClick }) => {
	return (
		<div
			className={styles.container}
			onClick={() => onClick(userData)}
			data-cy="user">
			<div className={styles.imageContainer}>
				<Image
					data-cy="user-profile-image"
					className={styles.storyUserImg}
					src={userData.profileImage}
					alt="img"
					width={100}
					height={100}
					priority
				/>
			</div>
			<h6 className={styles.userName} data-cy="user-name">
				{userData.name}
			</h6>
		</div>
	);
};

export default StoryUser;
