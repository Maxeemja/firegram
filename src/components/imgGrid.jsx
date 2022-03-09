import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { motion } from 'framer-motion';
export const ImgGrid = ({ setCurrImg }) => {
	const { docs } = useFirestore('imgs');
	console.log(docs);
	return (
		<div className='img-grid'>
			{docs &&
				docs.map((el) => (
					<motion.div
						className='img-wrap'
						key={el.id}
						whileHover={{ opacity: 1 }}
						onClick={() => setCurrImg(el.downloadURL)}
					>
						<motion.img
							src={el.downloadURL}
							alt='img'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
              transition={{delay: 1}}
						/>
					</motion.div>
				))}
		</div>
	);
};
