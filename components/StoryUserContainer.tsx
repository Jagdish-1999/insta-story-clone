"use client";
import React, { useCallback, useContext, useState } from "react";

import StoryUser from "./StoryUser";
import styles from "./StoryUserContainer.module.scss";
import ShowStory from "./ShowStory";
import { MyContext, UserListTypes } from "@/providers/ContextProvider";

const StoryUserContainer: React.FC = () => {
	const { storyData, setStoryData, userList, activeStory } =
		useContext(MyContext);

	const handleStoryClick = useCallback(
		(user: UserListTypes): void => {
			setStoryData(user);
		},
		[setStoryData]
	);

	return (
		<div className={styles.container}>
			<div className={styles.timeLineContainer}>
				{storyData &&
					Object.keys(storyData).length > 0 &&
					storyData?.images?.map((eachStory: string, idx: number) => (
						<div key={eachStory + idx} className={`${styles.timeLine}`}>
							<div
								className={`${activeStory >= idx ? styles.bgWhite : ""} ${
									activeStory === idx ? styles.animate : ""
								} ${styles.animatedTimeLine}`}
								id="time_line"
							/>
						</div>
					))}
			</div>
			<div className={styles.storyUser}>
				{userList.length > 0 ? (
					userList.map((eachUser: UserListTypes) => (
						<StoryUser
							key={eachUser.id}
							userData={eachUser}
							onClick={handleStoryClick}
						/>
					))
				) : (
					<div data-cy="loading">Loading...</div>
				)}
			</div>
			<ShowStory />
		</div>
	);
};

export default StoryUserContainer;
