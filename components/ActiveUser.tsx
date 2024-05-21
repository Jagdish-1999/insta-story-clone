import React, { useCallback, useContext } from "react";
import Image from "next/image";

import styles from "./ActiveUser.module.scss";
import { MyContext } from "@/providers/ContextProvider";
import RightArrow from "@/icons/RightArrow";
import CloseIcon from "@/icons/CloseIcon";
import ReelIcon from "@/icons/ReelIcon";
import DotMenuIcon from "@/icons/DotMenuIcon";

const ActiveUser = () => {
	const { storyData, setStoryData } = useContext(MyContext);

	const handleClose = useCallback(() => {
		setStoryData({});
	}, [setStoryData]);

	return (
		<div className={styles.container}>
			<div className={styles.profileLogo}>
				<Image
					data-cy="active-user-image"
					className={styles.userImg}
					src="/assets/leaf.jpg"
					alt="img"
					width={40}
					height={40}
					priority
				/>
				<div className={styles.user}>
					<div className={styles.name}>
						<h4 data-cy="active-user-name">{storyData.name}</h4>
						<h5 data-cy="posted-time">just now</h5>
					</div>
					<div className={styles.icons} data-cy="left-icons">
						<ReelIcon />
						watch full reel
						<RightArrow />
					</div>
				</div>
			</div>
			<div
				className={styles.crossIcon}
				onClick={handleClose}
				data-cy="right-icons">
				<DotMenuIcon />
				<CloseIcon />
			</div>
		</div>
	);
};

export default ActiveUser;
