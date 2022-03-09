import { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { storage, timestamp, db } from '../firebase/config';
import { async } from '@firebase/util';
export const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);
	useEffect(() => {
		//refs
		const storageRef = ref(storage, file.name);
		const collectionRef = collection(db, 'imgs');
		const uploadTask = uploadBytesResumable(storageRef, file);
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progress);
			},
			(err) => {
				setError(err);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const createdAt = timestamp();
					try {
						addDoc(collectionRef, {
							downloadURL,
							createdAt
						});
					} catch (e) {
						console.error('Error adding document: ', e);
					}
					setUrl(downloadURL);
				});
			}
		);
	}, [file]);
	return { progress, url, error };
};
