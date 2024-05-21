import React from "react";
import Image from "next/image";

import styles from "./StoryImage.module.scss";

interface PropTypes {
	url: string;
}

const StoryImage: React.FC<PropTypes> = ({ url }) => {
	return (
		<>
			{url && (
				<Image
					data-cy="story-images"
					key={url}
					className={styles.image}
					src={url}
					alt="img"
					width={500}
					height={500}
					priority
				/>
			)}
		</>
	);
};

export default StoryImage;
