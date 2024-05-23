"use client";
import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";

import styles from "./ShowStory.module.scss";
import ActiveUser from "./ActiveUser";
import { MyContext, SetStateType } from "@/providers/ContextProvider";
import StoryImage from "./StoryImage";

interface PropTypes extends SetStateType {}

const timer = 5;

const ShowStory: React.FC<PropTypes> = () => {
	const { storyData, setStoryData, activeStory, setActiveStory, url, setUrl } =
		useContext(MyContext);

	const timer1 = useRef<ReturnType<typeof setTimeout>>();
	const timer2 = useRef<ReturnType<typeof setTimeout>>();

	const clearTimer = useCallback(() => {
		clearTimeout(timer1.current);
		clearTimeout(timer2.current);
	}, []);

	const resetFunc = useCallback(() => {
		clearTimer();
		setUrl("");
		setActiveStory(0);
		setStoryData({});
	}, [clearTimer, setActiveStory, setStoryData, setUrl]);

	useEffect(() => {
		const timeline = document.querySelectorAll<HTMLDivElement>("#time_line");

		if (storyData && Object.keys(storyData).length > 0) {
			const length = storyData.images.length;
			document.body.style.setProperty("--duration", `${timer}s`);

			if (activeStory > length - 1 || activeStory < 0) resetFunc();

			if (activeStory < length) {
				timer1.current = setTimeout(() => {
					setUrl(storyData.images[activeStory]);
					setActiveStory((prev: number) => prev + 1);
					timeline[activeStory].classList.add("bgWhite");
				}, timer * 1000);
			} else {
				setActiveStory(0);
			}

			timer2.current = setTimeout(() => {
				resetFunc();
			}, timer * length * 1000);
		}

		return () => {
			clearTimer();
		};
	}, [
		activeStory,
		clearTimer,
		resetFunc,
		setActiveStory,
		setStoryData,
		setUrl,
		storyData,
		url,
	]);

	useEffect(() => {
		setUrl(storyData?.images?.[activeStory]);
	}, [activeStory, setUrl, storyData?.images]);

	const handePrevClick = useCallback(() => {
		if (activeStory !== 0) clearTimer();
		setActiveStory((prev: number) => (prev !== 0 ? prev - 1 : 0));
	}, [activeStory, clearTimer, setActiveStory]);

	const handeNextClick = useCallback(() => {
		clearTimer();
		setActiveStory((prev: number) =>
			prev != storyData?.images?.length - 1 ? prev + 1 : resetFunc()
		);
	}, [clearTimer, resetFunc, setActiveStory, storyData?.images?.length]);

	return (
		storyData &&
		Object.keys(storyData).length > 0 && (
			<div className={styles.container}>
				<ActiveUser />
				<div className={styles.showStory}>
					<StoryImage url={url} />
				</div>
				<div
					className="prev"
					onClick={handePrevClick}
					data-cy="prev-navigation"
				/>
				<div
					className="next"
					onClick={handeNextClick}
					data-cy="next-navigation"
				/>
			</div>
		)
	);
};

export default ShowStory;
