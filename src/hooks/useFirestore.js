import { collection, onSnapshot, orderBy, query} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

export const useFirestore = (name) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = onSnapshot(query(collection(db, name), orderBy('createdAt', 'desc')), (snap) => {
			let documents = [];
			snap.forEach((doc) => {
				documents.push({ ...doc.data(), id: doc.id });
			});
			setDocs(documents);
		});
		return () => unsub();
	}, [name]);

	return { docs };
};
