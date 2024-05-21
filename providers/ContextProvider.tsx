"use client";
import React, { createContext, useEffect, useMemo, useState } from "react";

export interface SetStateType {
	[key: string]: any | React.Dispatch<React.SetStateAction<any>>;
}

export interface PropTypes {
	children: React.ReactNode;
}

export interface UserListTypes {
	id: string | number;
	name: string;
	profileLogo: string;
	images: string[];
}

export const MyContext = createContext<SetStateType>({});

const ContextProvider: React.FC<PropTypes> = ({ children }) => {
	const [storyData, setStoryData] = useState<UserListTypes | null>(null);
	const [userList, setUserList] = useState<UserListTypes[]>([]);
	const [activeStory, setActiveStory] = useState(0);
	const [url, setUrl] = useState("");

	useEffect(() => {
		(async () => {
			const response = await fetch("http://localhost:3000/api/user-list");
			setUserList(await response.json());
		})();
	}, []);

	const contextValue = {
		storyData,
		setStoryData,
		userList,
		setUserList,
		activeStory,
		setActiveStory,
		url,
		setUrl,
	};

	if (typeof window !== "undefined") {
		(window as any).contextData = contextValue;
	}

	return (
		<MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
	);
};

export default ContextProvider;
