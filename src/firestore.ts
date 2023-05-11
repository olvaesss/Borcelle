import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
const serviceAccount = (`drycleaning-borcelle-firebase-adminsdk-7p85g-f8699fd2a0.json`);
initializeApp({
    credential: cert(serviceAccount)
});
export const db = getFirestore();